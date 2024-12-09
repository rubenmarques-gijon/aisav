export const diagnosticTree = [
  {
    id: 'initial',
    question: 'What is the primary issue the customer is experiencing?',
    options: [
      {
        label: 'No WiFi connection',
        value: 'no_connection',
        nextStep: 'device_scope'
      },
      {
        label: 'Slow or intermittent connection',
        value: 'slow_connection',
        nextStep: 'device_scope'
      },
      {
        label: 'Cannot connect specific device',
        value: 'device_specific',
        nextStep: 'device_details'
      }
    ]
  },
  {
    id: 'device_scope',
    question: 'How many devices are affected?',
    options: [
      {
        label: 'All devices',
        value: 'all_devices',
        nextStep: 'router_check'
      },
      {
        label: 'Multiple devices but not all',
        value: 'multiple_devices',
        nextStep: 'location_check'
      },
      {
        label: 'Single device only',
        value: 'single_device',
        nextStep: 'device_details'
      }
    ]
  }
]

export const solutionTemplates = {
  router_restart: {
    title: 'Router Restart Procedure',
    steps: [
      'Power off the router by unplugging it',
      'Wait for 30 seconds',
      'Plug the router back in',
      'Wait for all lights to stabilize (2-3 minutes)',
      'Test connection'
    ]
  },
  channel_optimization: {
    title: 'WiFi Channel Optimization',
    steps: [
      'Access router admin panel',
      'Navigate to wireless settings',
      'Set 2.4GHz channel to 1, 6, or 11',
      'Set 5GHz channel to auto',
      'Save settings and test'
    ]
  }
}
