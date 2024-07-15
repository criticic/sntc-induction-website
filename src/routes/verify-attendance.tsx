import React, { useState } from "react";
import { Scanner, IDetectedBarcode } from "@yudiel/react-qr-scanner";

function VerifyAttendancePage() {
  const [scannerActive, setScannerActive] = useState(false);
  const [scannedData, setScannedData] = useState("");

  const verifyScan = (result: IDetectedBarcode[]) => {
    console.log(result[0].rawValue);
    setScannerActive(false);
    setScannedData(result[0].rawValue);
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="w-full rounded-xl border border-gray-300 bg-white p-4">
        <div className="mb-4 text-center text-lg font-semibold text-gray-700">
          Scan QR Code to Verify Attendance
        </div>
        <div
          className="flex h-auto w-full cursor-pointer items-center justify-center rounded-xl border border-gray-300 bg-gray-100"
          onClick={() => {
            setScannerActive(true);
          }}
        >
          {scannerActive ? (
            <Scanner onScan={verifyScan} />
          ) : (
            <div className="py-48 text-gray-400">Click to Open Camera</div>
          )}
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-600">
        Detected: {scannedData}
      </div>
    </div>
  );
}

export default VerifyAttendancePage;
