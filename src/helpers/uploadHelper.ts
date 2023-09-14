export function dataURItoBlob(dataURI: string) {
  const [metadata, data] = dataURI.split(",");
  const mimeType = metadata.match(/data:([^;]+)/)![1];
  const byteString = atob(data);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }

  return new Blob([arrayBuffer], { type: mimeType });
}
