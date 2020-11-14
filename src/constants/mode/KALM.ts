import { PhaseConfiguration } from '../Retrospective';

export default {
  0: {
    name: 'Write',
    description: 'Create cards, communicate your thoughts & stack common',
    columns: {
      0: {
        id: 'keep',
        name: 'Keep',
        type: 'positive',
        voting: {
          enabled: false,
          displayed: false
        },
        focus: {
          enabled: true,
          column: '0',
          align: 'right'
        },
        sorted: false
      },
      1: {
        id: 'add',
        name: 'Add',
        type: 'positive',
        voting: {
          enabled: false,
          displayed: false
        },
        focus: {
          enabled: true,
          column: '1',
          align: 'right'
        },
        sorted: false
      },
      2: {
        id: 'less',
        name: 'Less',
        type: 'negative',
        voting: {
          enabled: false,
          displayed: false
        },
        focus: {
          enabled: true,
          column: '2',
          align: 'left'
        },
        sorted: false
      },
      3: {
        id: 'more',
        name: 'More',
        type: 'positive',
        voting: {
          enabled: false,
          displayed: false
        },
        focus: {
          enabled: true,
          column: '3',
          align: 'right'
        },
        sorted: false
      }
    },
    activities: [
      { icon: 'phase1-create', description: 'Create cards' },
      { icon: 'phase1-communicate', description: 'Communicate meaning' },
      { icon: 'phase1-combine', description: 'Combine to stack' }
    ]
  },
  1: {
    name: 'Vote',
    description: 'Vote on the most important cards for yourself',
    columns: {
      0: {
        id: 'keep',
        name: 'Keep',
        type: 'positive',
        voting: {
          enabled: true,
          displayed: false
        },
        focus: {
          enabled: true,
          column: '0',
          align: 'right'
        },
        sorted: false
      },
      1: {
        id: 'add',
        name: 'Add',
        type: 'positive',
        voting: {
          enabled: true,
          displayed: false
        },
        focus: {
          enabled: true,
          column: '1',
          align: 'right'
        },
        sorted: false
      },
      2: {
        id: 'less',
        name: 'Less',
        type: 'negative',
        voting: {
          enabled: true,
          displayed: false
        },
        focus: {
          enabled: true,
          column: '2',
          align: 'left'
        },
        sorted: false
      },
      3: {
        id: 'more',
        name: 'More',
        type: 'positive',
        voting: {
          enabled: true,
          displayed: false
        },
        focus: {
          enabled: true,
          column: '3',
          align: 'right'
        },
        sorted: false
      }
    },
    activities: [{ icon: 'phase2-vote', description: 'Vote wisely' }]
  },
  2: {
    name: 'Discuss',
    description: 'Discuss top-voted cards',
    columns: {
      0: {
        id: 'keep',
        name: 'Keep',
        type: 'positive',
        voting: {
          enabled: false,
          displayed: true
        },
        focus: {
          enabled: true,
          column: '4',
          align: 'right'
        },
        sorted: true
      },
      1: {
        id: 'add',
        name: 'Add',
        type: 'positive',
        voting: {
          enabled: false,
          displayed: true
        },
        focus: {
          enabled: true,
          column: '4',
          align: 'right'
        },
        sorted: true
      },
      2: {
        id: 'less',
        name: 'Less',
        type: 'negative',
        voting: {
          enabled: false,
          displayed: true
        },
        focus: {
          enabled: true,
          column: '4',
          align: 'left'
        },
        sorted: true
      },
      3: {
        id: 'more',
        name: 'More',
        type: 'positive',
        voting: {
          enabled: false,
          displayed: true
        },
        focus: {
          enabled: true,
          column: '4',
          align: 'right'
        },
        sorted: true
      },
      4: {
        id: 'actions',
        name: 'Actions',
        type: 'actions',
        voting: {
          enabled: false,
          displayed: true
        },
        focus: {
          enabled: false,
          column: '4',
          align: 'right'
        },
        sorted: false
      }
    },
    activities: [{ icon: 'phase3-discuss', description: 'Discuss top-voted' }]
  }
} as { [key: string]: PhaseConfiguration };