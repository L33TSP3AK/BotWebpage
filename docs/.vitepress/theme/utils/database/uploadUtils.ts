import { validateFileType } from './fileUtils'

export interface UploadProgress {
  loaded: number
  total: number
  percentage: number
}

export const uploadDatabase = async (
  file: File, 
  onProgress: (progress: UploadProgress) => void
): Promise<void> => {
  // Validate file type
  const validTypes = ['.db', '.sqlite', '.sql']
  if (!validateFileType(file, validTypes)) {
    throw new Error('Invalid file type. Please upload a database file.')
  }

  // Create FormData
  const formData = new FormData()
  formData.append('database', file)

  // Simulated upload with progress
  return new Promise((resolve, reject) => {
    let loaded = 0
    const total = file.size
    
    const interval = setInterval(() => {
      loaded = Math.min(loaded + (total * 0.1), total)
      
      onProgress({
        loaded,
        total,
        percentage: Math.round((loaded / total) * 100)
      })
      
      if (loaded >= total) {
        clearInterval(interval)
        resolve()
      }
    }, 500)
  })
}
