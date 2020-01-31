export const required = (value) => {
  if(value) return undefined;
  return 'Field is required';
}

export const minLengthCreator = ( minLength) => (value) => {
 if ( value.length < minLength) return `Фраза не повинна бути коротшою аніж ${minLength} символів`;
 return undefined;
} 