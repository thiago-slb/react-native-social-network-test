export function excerpt(text: string, maxlength: number) {
  if (text.length > maxlength) {
    return text.substring(0, maxlength) + '...';
  }
  return text;
}

export function alhpanumericOnly(text: string) {
  return text.replace(/[^A-Za-z0-9]/g, '');
}
