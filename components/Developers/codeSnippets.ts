export type SupportedLang = "curl" | "javascript" | "python";

export const codeExamples: Record<string, Record<SupportedLang, string>> = {
  createShipment: {
    curl: `curl -X POST https://app.sellerpadi.com/api/v1/shipments/create \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer rst_live_8f921a4b901e23f..." \\
  -d '{
    "packageName": "iPhone 15 Pro Dispatch",
    "weight": "0.45",
    "receiverPhone": "+2348012345678"
  }'`,
    javascript: `const response = await fetch('https://app.sellerpadi.com/api/v1/shipments/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer rst_live_8f921a4b901e23f...'
  },
  body: JSON.stringify({
    packageName: 'iPhone 15 Pro Dispatch',
    receiverName: 'John Doe',
    receiverPhone: '+2348012345678',
    destination: 'Lekki, Lagos',
    weight: '0.45'
  })
});

const data = await response.json();
console.log('Dispatch Created:', data.packageId, data.innerSecret);`,
    python: `import requests

url = "https://app.sellerpadi.com/api/v1/shipments/create"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer rst_live_8f921a4b901e23f..."
}
payload = {
    "packageName": "iPhone 15 Pro Dispatch",
    "receiverName": "John Doe",
    "receiverPhone": "+2348012345678",
    "destination": "Lekki, Lagos",
    "weight": "0.45"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
  },
  getQrCode: {
    curl: `curl -X GET "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/qr?format=json"`,
    javascript: `const res = await fetch('https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/qr?format=json');
const qrData = await res.json();
console.log('QR Code Image Link:', qrData.qrImageUrl); // PNG format for labels
console.log('Public Verification Scan Link:', qrData.scanUrl);`,
    python: `import requests

res = requests.get("https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/qr?format=json")
print(res.json())`,
  },
  verifyShipment: {
    curl: `curl -X GET "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/verify"`,
    javascript: `const res = await fetch('https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/verify');
const packageData = await res.json();
console.log('Package Status:', packageData.status); // InTransit | Delivered | Disputed`,
    python: `import requests

res = requests.get("https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/verify")
print(res.json())`,
  },
  handoverShipment: {
    curl: `curl -X POST "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/handover" \\
  -H "Authorization: Bearer rst_live_8f921a4b901e23f..." \\
  -H "Content-Type: application/json" \\
  -d '{ "riderName": "John Rider", "riderPhone": "+2348011223344", "location": "Ikeja Hub, Lagos" }'`,
    javascript: `const res = await fetch('https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/handover', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer rst_live_8f921a4b901e23f...',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ riderName: 'John Rider', riderPhone: '+2348011223344', location: 'Ikeja Hub, Lagos' })
});
const result = await res.json();
console.log('Handover Status:', result.shipment.status);`,
    python: `import requests

res = requests.post(
    "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/handover",
    headers={"Authorization": "Bearer rst_live_8f921a4b901e23f..."},
    json={"riderName": "John Rider", "riderPhone": "+2348011223344", "location": "Ikeja Hub, Lagos"}
)
print(res.json())`,
  },
  confirmDelivery: {
    curl: `curl -X POST "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/verify" \\
  -H "Authorization: Bearer rst_live_8f921a4b901e23f..." \\
  -H "Content-Type: application/json" \\
  -d '{ "innerSecret": "SP-A8F2B1C0", "location": "Lekki, Lagos" }'`,
    javascript: `const res = await fetch('https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer rst_live_8f921a4b901e23f...',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ innerSecret: 'SP-A8F2B1C0', location: 'Lekki, Lagos' })
});
const result = await res.json();
console.log('Delivery Verified:', result.shipment.status);`,
    python: `import requests

res = requests.post(
    "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/verify",
    headers={"Authorization": "Bearer rst_live_8f921a4b901e23f..."},
    json={"innerSecret": "SP-A8F2B1C0", "location": "Lekki, Lagos"}
)
print(res.json())`,
  },
  historyShipment: {
    curl: `curl -X GET "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/history"`,
    javascript: `const res = await fetch('https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/history');
const history = await res.json();
console.log('Custody Timeline Events:', history.events);`,
    python: `import requests

res = requests.get("https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/history")
print(res.json())`,
  },
  disputeShipment: {
    curl: `curl -X POST "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/dispute" \\
  -H "Authorization: Bearer rst_live_8f921a4b901e23f..." \\
  -H "Content-Type: application/json" \\
  -d '{ "innerSecret": "SP-A8F2B1C0", "reason": "Damaged contents on arrival", "location": "Lagos" }'`,
    javascript: `const res = await fetch('https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/dispute', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer rst_live_8f921a4b901e23f...',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ innerSecret: 'SP-A8F2B1C0', reason: 'Damaged contents on arrival', location: 'Lagos' })
});
const result = await res.json();
console.log('Dispute Logged:', result.success);`,
    python: `import requests

res = requests.post(
    "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/dispute",
    headers={"Authorization": "Bearer rst_live_8f921a4b901e23f..."},
    json={"innerSecret": "SP-A8F2B1C0", "reason": "Damaged contents on arrival", "location": "Lagos"}
)
print(res.json())`,
  },
  healthCheck: {
    curl: `curl -X GET "https://app.sellerpadi.com/api/v1/health"`,
    javascript: `const res = await fetch('https://app.sellerpadi.com/api/v1/health');
const health = await res.json();
console.log('API Health Status:', health.status); // "healthy"`,
    python: `import requests

res = requests.get("https://app.sellerpadi.com/api/v1/health")
print(res.json())`,
  },
  listShipments: {
    curl: `curl -X GET "https://app.sellerpadi.com/api/v1/shipments" \\
  -H "Authorization: Bearer rst_live_8f921a4b901e23f..."`,
    javascript: `const res = await fetch('https://app.sellerpadi.com/api/v1/shipments', {
  headers: { 'Authorization': 'Bearer rst_live_8f921a4b901e23f...' }
});
const shipments = await res.json();
console.log('My Shipments:', shipments.length);`,
    python: `import requests

res = requests.get(
    "https://app.sellerpadi.com/api/v1/shipments",
    headers={"Authorization": "Bearer rst_live_8f921a4b901e23f..."}
)
print(res.json())`,
  },
  editShipment: {
    curl: `curl -X PATCH "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D" \\
  -H "Authorization: Bearer rst_live_8f921a4b901e23f..." \\
  -H "Content-Type: application/json" \\
  -d '{ "packageName": "Updated Parcel Name", "receiverPhone": "+2348099887766", "destination": "Lekki Phase 1" }'`,
    javascript: `const res = await fetch('https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D', {
  method: 'PATCH',
  headers: {
    'Authorization': 'Bearer rst_live_8f921a4b901e23f...',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ packageName: 'Updated Parcel Name', receiverPhone: '+2348099887766', destination: 'Lekki Phase 1' })
});
const result = await res.json();
console.log('Updated:', result.success);`,
    python: `import requests

res = requests.patch(
    "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D",
    headers={"Authorization": "Bearer rst_live_8f921a4b901e23f..."},
    json={"packageName": "Updated Parcel Name", "receiverPhone": "+2348099887766", "destination": "Lekki Phase 1"}
)
print(res.json())`,
  },
  returnHandover: {
    curl: `curl -X POST "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/return-handover" \\
  -H "Authorization: Bearer rst_live_8f921a4b901e23f..." \\
  -H "Content-Type: application/json" \\
  -d '{ "riderName": "Emmanuel Return Rider", "riderPhone": "+2348011223344", "location": "Lekki Return Hub, Lagos" }'`,
    javascript: `const res = await fetch('https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/return-handover', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer rst_live_8f921a4b901e23f...',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    riderName: 'Emmanuel Return Rider',
    riderPhone: '+2348011223344',
    location: 'Lekki Return Hub, Lagos'
  })
});
const result = await res.json();
console.log('Return Handover Status:', result.shipment.status); // ReturnInTransit`,
    python: `import requests

res = requests.post(
    "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/return-handover",
    headers={"Authorization": "Bearer rst_live_8f921a4b901e23f..."},
    json={
        "riderName": "Emmanuel Return Rider",
        "riderPhone": "+2348011223344",
        "location": "Lekki Return Hub, Lagos"
    }
)
print(res.json())`,
  },
  storeReceived: {
    curl: `curl -X POST "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/store-received" \\
  -H "Authorization: Bearer rst_live_8f921a4b901e23f..." \\
  -H "Content-Type: application/json" \\
  -d '{ "receivedBy": "Store Manager Grace", "location": "Victoria Island Branch" }'`,
    javascript: `const res = await fetch('https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/store-received', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer rst_live_8f921a4b901e23f...',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    receivedBy: 'Store Manager Grace',
    location: 'Victoria Island Branch'
  })
});
const result = await res.json();
console.log('Package Arrived at Store:', result.shipment.status); // StoreReceived`,
    python: `import requests

res = requests.post(
    "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/store-received",
    headers={"Authorization": "Bearer rst_live_8f921a4b901e23f..."},
    json={
        "receivedBy": "Store Manager Grace",
        "location": "Victoria Island Branch"
    }
)
print(res.json())`,
  },
  resolveDispute: {
    curl: `curl -X POST "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/resolve" \\
  -H "Authorization: Bearer rst_live_8f921a4b901e23f..." \\
  -H "Content-Type: application/json" \\
  -d '{ "resolutionType": "RefundAndRestock", "resolutionNotes": "Item returned intact; refund credited & stock restored" }'`,
    javascript: `const res = await fetch('https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/resolve', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer rst_live_8f921a4b901e23f...',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    resolutionType: 'RefundAndRestock', // 'RefundAndRestock' | 'ExchangeReplacement' | 'DisputeDismissed'
    resolutionNotes: 'Item returned intact; refund credited & stock restored'
  })
});
const result = await res.json();
console.log('Resolution Confirmed:', result.shipment.resolutionStatus);`,
    python: `import requests

res = requests.post(
    "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/resolve",
    headers={"Authorization": "Bearer rst_live_8f921a4b901e23f..."},
    json={
        "resolutionType": "RefundAndRestock",
        "resolutionNotes": "Item returned intact; refund credited & stock restored"
    }
)
print(res.json())`,
  },
  redispatchShipment: {
    curl: `curl -X POST "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/redispatch" \\
  -H "Authorization: Bearer rst_live_8f921a4b901e23f..." \\
  -H "Content-Type: application/json" \\
  -d '{ "notes": "Re-dispatched replacement unit to customer" }'`,
    javascript: `const res = await fetch('https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/redispatch', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer rst_live_8f921a4b901e23f...',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ notes: 'Re-dispatched replacement unit to customer' })
});
const result = await res.json();
console.log('New Replacement Package ID:', result.newPackageId);`,
    python: `import requests

res = requests.post(
    "https://app.sellerpadi.com/api/v1/shipments/SHPT-8F912A3B4C5D/redispatch",
    headers={"Authorization": "Bearer rst_live_8f921a4b901e23f..."},
    json={"notes": "Re-dispatched replacement unit to customer"}
)
print(res.json())`,
  },
};

export const webhookPayloadExample = `{
  "event": "shipment.delivered",
  "timestamp": "2026-08-03T14:30:00Z",
  "data": {
    "packageId": "SHPT-8F912A3B4C5D",
    "companyName": "Big Eazi Logistics",
    "shipperAddress": "0x6e799abd05b044acb6d9a59605de21ec845c2180",
    "packageName": "iPhone 15 Pro Dispatch",
    "status": "Verified",
    "recipient": "0x9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b",
    "location": "Lagos, NG",
    "onChainTxHash": "0x8f912a3b4c5d..."
  }
};`;
