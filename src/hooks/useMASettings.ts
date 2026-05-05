import { useState, useEffect } from 'react'
import { MASettingsMode } from '@/utils/moving-average'

export function useMASettings() {
  const [mode, setMode] = useState<MASettingsMode>(() => {
    return (localStorage.getItem('ma_settings_mode') as MASettingsMode) || 'AUTO'
  })

  useEffect(() => {
    const handleSettingsChange = () => {
      setMode((localStorage.getItem('ma_settings_mode') as MASettingsMode) || 'AUTO')
    }
    window.addEventListener('ma_settings_changed', handleSettingsChange)
    return () => window.removeEventListener('ma_settings_changed', handleSettingsChange)
  }, [])

  const changeMode = (newMode: MASettingsMode) => {
    localStorage.setItem('ma_settings_mode', newMode)
    setMode(newMode)
    window.dispatchEvent(new Event('ma_settings_changed'))
  }

  return { mode, setMode: changeMode }
}
