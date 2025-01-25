export const copyToClipboard = (reference: string) => {
  const urlText = document.getElementById(reference)
  if (urlText && urlText.textContent) {
    const tempInput = document.createElement('textarea')
    tempInput.value = urlText.textContent
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)
  }
}

export const validateKeys = (
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>
) => {
  // validate that obnj1 and obj2 are objects
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false
  }

  // make sure neither is an array
  if (Array.isArray(obj1) || Array.isArray(obj2)) {
    return false
  }

  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  const intersection = obj1Keys.filter(x => obj2Keys.includes(x))
  return intersection.length === obj1Keys.length
}

export const convertFileToBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })
}


export const capitalizeFirst = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();