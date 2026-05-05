/**
 * Оптимізовані чисті функції для обчислення ковзних середніх (SMA, EMA, WMA).
 * Усі функції мають складність O(N) завдяки використанню формул для швидкого 
 * перерахування сум без вкладених циклів.
 */

// 1. Просте ковзне середнє (SMA)
// O(N) оптимізація: сума вікна оновлюється через додавання нового елемента 
// та віднімання того, що вийшов за межі вікна.
export function sma(values: number[], windowSize: number): number[] {
  if (windowSize <= 1) return [...values];
  const result: number[] = [];
  let currentSum = 0;
  
  for (let i = 0; i < values.length; i++) {
    currentSum += values[i];
    if (i >= windowSize) {
      currentSum -= values[i - windowSize];
    }
    const count = Math.min(i + 1, windowSize);
    result.push(Number((currentSum / count).toFixed(2)));
  }
  
  return result;
}

// 2. Експоненційне ковзне середнє (EMA)
// Надає більшу вагу останнім змінам. 
// O(N): значення залежить лише від поточного елемента та попереднього EMA.
export function ema(values: number[], windowSize: number): number[] {
  if (values.length === 0) return [];
  if (windowSize <= 1) return [...values];
  
  const result: number[] = [];
  const k = 2 / (windowSize + 1); // Коефіцієнт згладжування
  
  result.push(Number(values[0].toFixed(2)));
  
  for (let i = 1; i < values.length; i++) {
    const nextVal = values[i] * k + result[i - 1] * (1 - k);
    result.push(Number(nextVal.toFixed(2)));
  }
  
  return result;
}

// 3. Зважене ковзне середнє (WMA)
// O(N) оптимізація: замість повного перерахунку використовується математичний трюк:
// W_new = W_old + windowSize * added_val - S_old (де S - проста сума попереднього вікна)
export function wma(values: number[], windowSize: number): number[] {
  if (values.length === 0) return [];
  if (windowSize <= 1) return [...values];
  
  const result: number[] = [];
  let currentWMA_Sum = 0;
  let currentWindow_Sum = 0;
  const maxWeightSum = (windowSize * (windowSize + 1)) / 2;
  
  for (let i = 0; i < values.length; i++) {
    if (i < windowSize) {
      // Поки вікно тільки набирається (початкові елементи)
      currentWMA_Sum += values[i] * (i + 1);
      currentWindow_Sum += values[i];
      
      const currentWeightSum = ((i + 1) * (i + 2)) / 2;
      result.push(Number((currentWMA_Sum / currentWeightSum).toFixed(2)));
    } else {
      // Для всіх наступних - O(1) перехід
      // Віднімаємо значення, що випадає з вікна з простої суми в наступному кроці.
      // Спочатку обчислюємо нову зважену суму:
      currentWMA_Sum = currentWMA_Sum + (windowSize * values[i]) - currentWindow_Sum;
      
      // Потім оновлюємо чисту суму вікна для наступної ітерації:
      currentWindow_Sum = currentWindow_Sum - values[i - windowSize] + values[i];
      
      result.push(Number((currentWMA_Sum / maxWeightSum).toFixed(2)));
    }
  }
  
  return result;
}

// ---------- АВТОВИБІР ТА АНАЛІЗ ----------

// Допоміжна функція: обчислює Mean Absolute Error (MAE) між фактом і вчорашнім прогнозом.
function calculateMAE(actualValues: number[], predictedValues: number[]): number {
  if (actualValues.length <= 1) return Infinity;
  let errorSum = 0;
  
  // Починаємо з індексу 1, оскільки прогноз для дня 'i' базується на даних 'i-1'.
  for (let i = 1; i < actualValues.length; i++) {
    const actual = actualValues[i];
    const prediction = predictedValues[i - 1]; 
    errorSum += Math.abs(actual - prediction);
  }
  
  return errorSum / (actualValues.length - 1);
}

// Допоміжна функція: обчислює Root Mean Squared Error (RMSE).
function calculateRMSE(actualValues: number[], predictedValues: number[]): number {
  if (actualValues.length <= 1) return Infinity;
  let errorSum = 0;
  for (let i = 1; i < actualValues.length; i++) {
    const diff = actualValues[i] - predictedValues[i - 1];
    errorSum += diff * diff;
  }
  return Math.sqrt(errorSum / (actualValues.length - 1));
}

// Допоміжна функція: обчислює Mean Absolute Percentage Error (MAPE), у відсотках.
function calculateMAPE(actualValues: number[], predictedValues: number[]): number {
  if (actualValues.length <= 1) return Infinity;
  let errorSum = 0;
  let count = 0;
  for (let i = 1; i < actualValues.length; i++) {
    const actual = actualValues[i];
    if (actual === 0) continue; // уникаємо ділення на нуль
    errorSum += Math.abs((actual - predictedValues[i - 1]) / actual);
    count++;
  }
  return count === 0 ? Infinity : (errorSum / count) * 100;
}

export type MAMethod = 'SMA' | 'EMA' | 'WMA';
export type MASettingsMode = MAMethod | 'AUTO';

/**
 * Тестує всі 3 алгоритми на історичних даних (фактично обчислює MAE 
 * за минулими днями) та повертає метод, що прогнозував найкраще.
 */
export type ErrorMetrics = { mae: number; rmse: number; mape: number }

export type ModelMetricsRow = {
  method: MAMethod
  metrics: ErrorMetrics
  isWinner: boolean
}

export function autoSelectBestMA(values: number[], windowSize: number): { bestMethod: MAMethod; result: number[]; mae: number; metrics: ErrorMetrics } {
  if (values.length <= 1) {
    return { bestMethod: 'SMA', result: sma(values, windowSize), mae: 0, metrics: { mae: 0, rmse: 0, mape: 0 } };
  }

  const smaResult = sma(values, windowSize);
  const emaResult = ema(values, windowSize);
  const wmaResult = wma(values, windowSize);

  const smaMAE = calculateMAE(values, smaResult);
  const emaMAE = calculateMAE(values, emaResult);
  const wmaMAE = calculateMAE(values, wmaResult);

  let bestMethod: MAMethod = 'SMA';
  let minMAE = smaMAE;
  let bestResult = smaResult;

  if (emaMAE < minMAE) {
    minMAE = emaMAE;
    bestMethod = 'EMA';
    bestResult = emaResult;
  }
  if (wmaMAE < minMAE) {
    minMAE = wmaMAE;
    bestMethod = 'WMA';
    bestResult = wmaResult;
  }

  const metrics: ErrorMetrics = {
    mae: Number(minMAE.toFixed(2)),
    rmse: Number(calculateRMSE(values, bestResult).toFixed(2)),
    mape: Number(calculateMAPE(values, bestResult).toFixed(2)),
  };

  return { bestMethod, result: bestResult, mae: minMAE, metrics };
}

/**
 * Повертає метрики похибки для всіх трьох моделей (SMA, EMA, WMA) одночасно
 * та позначає переможця (isWinner: true) за критерієм мінімального MAE.
 */
export function getAllModelsMetrics(values: number[], windowSize: number): { rows: ModelMetricsRow[]; bestMethod: MAMethod } {
  const zero: ErrorMetrics = { mae: 0, rmse: 0, mape: 0 };

  if (values.length <= 1) {
    return {
      rows: [
        { method: 'SMA', metrics: zero, isWinner: true },
        { method: 'EMA', metrics: zero, isWinner: false },
        { method: 'WMA', metrics: zero, isWinner: false },
      ],
      bestMethod: 'SMA',
    };
  }

  const smaResult = sma(values, windowSize);
  const emaResult = ema(values, windowSize);
  const wmaResult = wma(values, windowSize);

  const buildMetrics = (result: number[]): ErrorMetrics => ({
    mae: Number(calculateMAE(values, result).toFixed(2)),
    rmse: Number(calculateRMSE(values, result).toFixed(2)),
    mape: Number(calculateMAPE(values, result).toFixed(2)),
  });

  const smaMetrics = buildMetrics(smaResult);
  const emaMetrics = buildMetrics(emaResult);
  const wmaMetrics = buildMetrics(wmaResult);

  // Переможець за MAE
  let bestMethod: MAMethod = 'SMA';
  let minMAE = smaMetrics.mae;
  if (emaMetrics.mae < minMAE) { minMAE = emaMetrics.mae; bestMethod = 'EMA'; }
  if (wmaMetrics.mae < minMAE) { bestMethod = 'WMA'; }

  return {
    rows: [
      { method: 'SMA', metrics: smaMetrics, isWinner: bestMethod === 'SMA' },
      { method: 'EMA', metrics: emaMetrics, isWinner: bestMethod === 'EMA' },
      { method: 'WMA', metrics: wmaMetrics, isWinner: bestMethod === 'WMA' },
    ],
    bestMethod,
  };
}

/**
 * Основна функція для інтеграції з UI. Повертає масив середніх значень 
 * в залежності від поточних налаштувань. 
 */
export function getMovingAverage(values: number[], windowSize: number, mode: MASettingsMode): number[] {
  if (mode === 'SMA') return sma(values, windowSize);
  if (mode === 'EMA') return ema(values, windowSize);
  if (mode === 'WMA') return wma(values, windowSize);
  
  // Режим 'AUTO'
  const { result } = autoSelectBestMA(values, windowSize);
  return result;
}

// Залишаємо старе ім'я для зворотної сумісності (стандартно - SMA)
export const movingAverage = sma;
