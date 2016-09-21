export default {
  //data about device
  "Device Data": {
    //everyday business purpose
    "eb": {
      applies: true	//means company collects and use device data for everyday business purpose
    },

    //marketing purpose
    "mp": {
      applies: true,
    },

    //profiling
    "pr": {
      applies: false
    },

    //shared with 3rd party
    "tp": [] //list of companies
},

  //geo data
  "Location Data": {
    "eb": {
      applies: true
    },
    "mp": {
      applies: false,
    },

    "pr": {
      applies: false
    },
    "tp": {
      applies: true
    }
  },

  //name, age, email etc
  "Personal Data": {
    "eb": {
      applies: true
    },
    "mp": {
      applies: true,
      content: 'Opt Out'
    },

    "pr": {
      applies: true
    },
    "tp": {
      applies: true
    }
  },

  //messages
  "Message Data": {
    "eb": {
      applies: true
    },
    "mp": {
      applies: true,
      content: 'Opt In'
    },

    "pr": {
      applies: true
    },
    "tp": {
      applies: true
    }
  },

  //purchase information, spending logs
  "Purchase Data": {
    "eb": {
      applies: true
    },
    "mp": {
      applies: true,
      optIn: {
        content: 'Opt in'
      }
    },

    "pr": {
      applies: true
    },
    "tp": {
      applies: true
    }
}

  // Add any relevant datatypes...
}
