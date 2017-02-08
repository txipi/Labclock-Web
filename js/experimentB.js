//
// experiment.js
//   global configuration of the experiment
//

var experiment = experiment || {};

experiment.B = {
  code: 'binding-B',
  password: '99',
  randomDelayMin: 1000,
  randomDelayMax: 3000,
  //postResultsURL: 'datasent.asp',
  generateCSV: true,
  responseKey: ' ',
  sounds: {
    getReady: {
      file: 'media/250-440Hz_44100Hz_16bit_1000ms.wav'
    },
    feedback: {
      file: null, //not used
      duration: 200, //in msec, and cannot be longer than 16384 / 48000 = 371.5 msec
      pitch: 1000, //in Hz
    }
  },
  messages: {
    commandPrevious: 'Previous',
    commandOK: 'OK',
    commandNext: 'Next',
    selectGroup: 'Select group',
    wrongPassword: 'Wrong code',
    trialReady: 'GET READY.<br/>Remember that you have to press the SPACEBAR during the SECOND lap.',
    trialSelecting: 'In which moment did you press the spacebar?<br/>Please select the moment clicking into the clock\'s face and press OK.',
    errorCSSAnimations: 'Your browser do not support CSS Animations.',
    errorResolution: 'Screen resolution is too small.</p><br/><p>Please press F11 to switch to full screen and then F5 to reload.',
    errorAudio: 'Your browser do not support Web Audio API and therefore it will not be possible to play experiment\'s sounds.',
    recommendBrowser: 'Please <a href="http://google.com/chrome">download the latests version of Google Chrome</a> and try again.',
    errorAJAX: 'Unfortunately there has been an error while sending your results. Please contact us to solve the problem.',
    downloadTitle: 'Download data',
    downloadData: 'Click here to download experiment\'s data in CSV.',
    end: 'Please close the experiment\'s window.'
  },
  preScreens: [
    {
      title: 'Welcome',
      content: '<p><strong>LabClock 1.3.2</strong><br/><a href="http://www.labpsico.deusto.es/">Labpsico</a>, 2017<br/><br/>Developed by Pablo Garaizar<br/>garaizar@deusto.es<br/><a href="http://www.deusto.es/">Universidad de Deusto</a><br/>Bilbao, Spain</p><br/><br/><br/><p>Before you start, please check if the <strong>audio is activated </strong> and choose <strong>appropriate volume</strong>.</p><br/><br/><br/><p>Press \'Next\' to continue...</p>'
    },
    {
      title: 'Thank you',
      content: '<p>We would like to thank you for taking part in this experiment. Without the help of people like you our research would not be possible.</p><br/><p>In this task there are no good or bad responses. What we are investigating are basic psychological processes that occur similarly in all individuals. </p><br/><p>If you\'d like to participate it is important that you do it with true interest. You do not need to tell us your name, and the responses that you will give through the experiment will be added to those of the other participants and analyzed statistically. Your participation in this experiment is <em>anonimous</em> and <em>voluntary</em>.</p><br/><p>If you agree to participate, press \'Next\'.</p>'
    },
    {
      title: 'Instructions',
      content: '<p>At the beginning of each trial of the experiment an analog clock face will be shown at the screen.</p><br/><p>A tone and a message will advise that in a few second the clock will start running.</p><br/><p>The rotary spot will complete two laps around the clock face before it will stop.</p><br/><p>Your task is to press the SPACEBAR in any moment of the SECOND LAP.</p><br/><p>At the end of the trial, you will be asked about the MOMENT that you DECIDED to press the spacebar, and then you will hace to click the clock\'s face to mark that moment.</p><br/><p>Once you have marked it, the trial will end and eventually another trial will start.</p>'
    },
    {
      title: 'Instructions',
      content: '<p>Sometimes a brief tone is played during the trials. Therefore, it is necessary to use headphones and set the volume properly to listen to these tones.</p><br/><p>If you forget to press the spacebar during the second lap in any trial, the next trial will be shown.</p><br/><p>It is important that you keep your eyes focused on the center of the clock and try not to blink during each trial.</p><br/><br/><br/><br/><br/><p>In the following screen a clock in demo mode will be shown to get used to it.</p>'
    },
    {
      title: 'Demo',
      content: '<p>Clock in demo mode. Press \'Next\' once you undestand how it works.</p><div id="demo_clock"><div id="demo_marks"><img src="img/dot.png" width="510" height="510"  id="demo_dot"/></div></div>'
    }
  ],
  passwordScreen: {
    title: 'Get ready',
    content: '<p>Please enter the code provided by the research group to start the experiment.</p><br/><div id="pre_password"><input type="password" id="pre_password_text" size="10" /></div><br/><p>The experiment will start once the correct code is entered.</p><br/><br/><br/><br/><br/><br/><br/><br/><p>Press \'OK\' to start...</p>'
  },
  phases: [
    {
      description: 'Training phase',
      progress: false,
      scramble: true,
      trials: [
        { cycle: 2560, tone: 1 },
        { cycle: 2560, tone: 500 },
        { cycle: 2560 }
      ],
      screen: {
        title: 'End of the training phase',
        content: '<p>Press \'OK\' to start the experiment.</p>'
      }
    },
    {
      description: 'Binding',
      progress: true,
      scramble: false,
      trials: [
        { cycle: 2560, tone: 500 },
        { cycle: 2560, tone: 1 },
        { cycle: 2560 },
        { cycle: 2560, tone: 500 },
        { cycle: 2560, tone: 1 },
        { cycle: 2560, tone: 1 },
        { cycle: 2560 },
        { cycle: 2560, tone: 500 },
        { cycle: 2560 }
      ],
      screen: {
        title: 'End of the experiment',
        content: '<p>Press \'OK\' to finish.</p>'
      }
    }
  ],
  postScreens: [
    {
      title: 'Explanation',
      content: '<p>We would like to thank you for taking part in this experiment. Without the help of people like you our research would not be possible.</p><br/><p>Now that the experiment is over, we assume that you are willing to know about its purpose.</p><br/><p>In this experiment you have been pressing spacebar at the second lap of each trial. In some trials a tone was played immediately after that, in other trials there was a delay between your action and the tone, and in other trials there was not tone at all. The purpose of the experiment was to compare your responses in each case and determine whether there is a \'binding effect\' between your action and the tone. This effect predicts that your estimates about the moment that you decide to press the spacebar are affected by the tone and will move towards the moment the tone sounded.</p><br/><p>This effect shows the discrepancies between what we think we did and we actually did in presence of external stimuli.</p><br/><p>If you are interested in this kind of studies, please visit <a href="http://www.labpsico.deusto.es">our website</a>.</p>'
    },
    {
      title: 'Thank you!',
      content: '<p>Your responses will be added to those of the other participants and analyzed statistically.</p><br/><p>Thank you very much for your collaboration.</p>'
    }
  ]
};
