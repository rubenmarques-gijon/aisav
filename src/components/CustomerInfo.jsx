function CustomerInfo({ activeCase }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow h-full">
      <h2 className="text-2xl font-bold mb-6">Customer Information</h2>
      {activeCase ? (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Case ID</h3>
            <p>{activeCase.id}</p>
          </div>
          <div>
            <h3 className="font-semibold">Customer Name</h3>
            <p>{activeCase.customerName}</p>
          </div>
          <div>
            <h3 className="font-semibold">Service Level</h3>
            <p>{activeCase.serviceLevel}</p>
          </div>
        </div>
      ) : (
        <p>No active case selected</p>
      )}
    </div>
  )
}

export default CustomerInfo
