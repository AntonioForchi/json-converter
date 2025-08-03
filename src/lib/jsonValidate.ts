export function isValidJSON(jsonString: string): {
  valid: boolean;
  error?: string;
} {
  try {
    JSON.parse(jsonString);
    return { valid: true };
  } catch (error) {
    return {
      valid: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

export function formatJSON(jsonString: string): string {
  const parsed = JSON.parse(jsonString);
  return JSON.stringify(parsed, null, 2);
}