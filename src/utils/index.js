export const downloadFile = (json, name) => {
  const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${name}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};