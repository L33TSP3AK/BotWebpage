/**
 * Utility functions for file handling
 */

export const validateFileType = (file: File, allowedTypes: string[]): boolean => {
  const fileExt = file.name.substring(file.name.lastIndexOf('.')).toLowerCase()
  return allowedTypes.includes(fileExt)
}

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
