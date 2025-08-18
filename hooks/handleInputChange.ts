export function handleInputChange<T>(
  setter: React.Dispatch<React.SetStateAction<T>>,
  key: keyof T,
  value: T[keyof T],
) {
  setter(prev => ({ ...prev, [key]: value }));
}
