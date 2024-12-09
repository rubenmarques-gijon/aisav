import { useState } from 'react'
import { diagnosticTree } from '../data/diagnosticTree'

function DiagnosticFlow({ activeCase }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState({})

  const handleResponse = (response) => {
    setResponses({ ...responses, [currentStep]: response })
    setCurrentStep(currentStep + 1)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow h-full">
      <h2 className="text-2xl font-bold mb-6">Diagnostic Flow</h2>
      <div className="space-y-6">
        {diagnosticTree[currentStep] && (
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {diagnosticTree[currentStep].question}
            </h3>
            <div className="space-y-2">
              {diagnosticTree[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleResponse(option.value)}
                  className="w-full text-left p-3 border rounded hover:bg-gray-50"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DiagnosticFlow
