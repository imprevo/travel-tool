export function convertStringToEnum<EnumValue, Value extends string | number>(
  enm: Record<string, EnumValue>,
  value: Value
): EnumValue | null {
  return (Object.values(enm) as unknown[] as Value[]).includes(value)
    ? (value as unknown as EnumValue)
    : null;
}
