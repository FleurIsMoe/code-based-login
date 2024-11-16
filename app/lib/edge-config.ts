import { createClient } from '@vercel/edge-config';

// Create Edge Config client
const config = createClient(process.env.EDGE_CONFIG);

// Type for our codes database
interface CodeDatabase {
  codes: {
    [key: string]: string;
  }
}

export async function getValidCodes(): Promise<CodeDatabase['codes']> {
  try {
    const codes = await config.get<CodeDatabase['codes']>('codes');
    return codes || {};
  } catch (error) {
    console.error('Error fetching codes from Edge Config:', error);
    return {};
  }
}

export async function isValidCode(code: string): Promise<{ valid: boolean; url?: string }> {
  try {
    const codes = await getValidCodes();
    if (codes && code in codes) {
      return { valid: true, url: codes[code] };
    }
    return { valid: false };
  } catch (error) {
    console.error('Error validating code:', error);
    return { valid: false };
  }
}