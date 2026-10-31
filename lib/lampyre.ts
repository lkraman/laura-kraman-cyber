const LAMPYRE_URL = 'https://account.lampyre.io/api/v2/mcp'

type McpResponse = {
  result?: {
    tools?: Array<{ name?: string }>
  }
}

export async function getLampyreContext() {
  const apiKey = process.env.LAMPYRE_API_KEY
  if (!apiKey) return { connected: false, toolCount: 0 }

  try {
    const response = await fetch(LAMPYRE_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json, text/event-stream',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'tools/list',
        params: {},
      }),
      cache: 'no-store',
    })

    if (!response.ok) return { connected: false, toolCount: 0 }
    const data = (await response.json()) as McpResponse
    return { connected: true, toolCount: data.result?.tools?.length ?? 0 }
  } catch {
    return { connected: false, toolCount: 0 }
  }
}
