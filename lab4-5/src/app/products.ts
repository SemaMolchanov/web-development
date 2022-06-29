export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  image1: string;
  image2: string;
  image3: string;
  isActive:boolean;
  likes:number;
  categoryId:number;
  currentCategory:number;
}
export const products = [
  {
    id: 1,
    name: 'Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Matte Black (Latest Model)',
    price: 211.49,
    description: `High-performance wireless noise cancelling headphones
    Compatible with iOS and Android devices.
    Pure adaptive noise canceling (pure ANC) actively blocks external noise
    Real-time Audio calibration preserves a Premium listening experience
    Up to 22 hours of battery life enables full-featured all-day wireless playback
    Apple's W1 chip and industry-leading Bluetooth technology keep you connected farther with fewer drop-outs
    With fast Fuel, a 10-minute charge gives 3 hours of play when battery is low. Rechargeable lithium ion battery
    Take calls, control your music, and activate Siri with the multifunction on-ear controls and microphone
    What's in the box: Beats Studio3 Wireless headphones, Carrying case, 3.5mm RemoteTalk cable, Universal USB charging cable, Quick Start Guide, Warranty Card
    `,
    url: `https://www.amazon.com/Beats-Studio3-Wireless-Over%E2%80%91Ear-Headphones/dp/B085296FLT/ref=sr_1_3?crid=1ZJ2LJIU61PQ2&keywords=headphones&qid=1656506246&sprefix=%2Caps%2C324&sr=8-3&th=1`,
    image1: `https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_SL1000_.jpg`,
    image2: `https://m.media-amazon.com/images/I/61zCi3GMH4L._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/51-JPLA8NBL._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:1,
    currentCategory:-1
  },
  {
    id: 2,
    name: 'Sony ZX Series Wired On-Ear Headphones, Black MDR-ZX110',
    price: 9.99,
    description: `Lightweight 1.38 in neodymium dynamic drivers deliver a punchy, rhythmic response to even the most demanding tracks. Driver Unit: Dome type
    The swiveling earcup design allows easy storage when you’re not using them, and enhances portability when you’re traveling
    Cushioned earpads for total comfort and enfolding closed-back design seals in sound
    The wide frequency range—spanning 12 Hz to 22 kHz—delivers deep bass, rich midrange, and soaring highs
    Plug: L-shaped stereo mini plug 3.5mm`,
    url: `https://www.amazon.com/Sony-MDRZX110-BLK-Stereo-Headphones/dp/B00NJ2M33I/ref=sr_1_5?crid=1HOCIYY65TICQ&keywords=headphones&qid=1656506614&sprefix=h%2Caps%2C441&sr=8-5`,
    image1: `https://m.media-amazon.com/images/I/71ZC0hq5mGL._AC_SL1500_.jpg`,
    image2: `https://m.media-amazon.com/images/I/61Qb9N6wq-L._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/61+Al0YynpL._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:1,
    currentCategory:-1
  },
  {
    id: 3,
    name: 'Audio-Technica ATH-M50xBT2 Wireless Over-Ear Headphones',
    price: 199.99,
    description: `Wireless, on-the-go design delivers the same critically acclaimed sonic performance as the original ATH-M50x professional studio headphones
    Proprietary 45 mm large-aperture drivers and dedicated amplifier deliver exceptional clarity throughout an extended frequency range, with deep, accurate bass response
    Low latency mode improves synchronicity between audio and video for smooth streaming and gaming
    Premium audio-grade components, including an AK4331 advanced audio DAC and dedicated internal headphone amp, deliver pure, natural sound
    Dual mics and beamforming technology ensure crystal-clear call quality
    `,
    url: `https://www.amazon.com/Audio-Technica-ATH-M50xBT2-Wireless-Over-Ear-Headphones/dp/B09BYFHL25/ref=sr_1_20?crid=1HOCIYY65TICQ&keywords=headphones&qid=1656506871&sprefix=h%2Caps%2C441&sr=8-20`,
    image1: `https://m.media-amazon.com/images/I/81h8NtMpv0L._AC_SL1500_.jpg`,
    image2: `https://m.media-amazon.com/images/I/913KRPdyGzL._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/91e4F+RyYHL._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:1,
    currentCategory:-1
  },
  {
    id: 4,
    name: 'JBL Tune 510BT: Wireless On-Ear Headphones with Purebass Sound - Blue',
    price: 49.99,
    description: `The Tune 510BT wireless headphones feature renowned JBL Pure Bass sound, which can be found in the most famous venues all around the world.
    With Wireless Bluetooth 5.0 Streaming, you can stream wirelessly from your device and even switch between two devices so that you don't miss a call.
    For long-lasting fun, listen wirelessly for up to 40 hours and recharge the battery in as little as 2 hours with the convenient Type-C USB cable. A quick 5-minute recharge gives you 2 additional hours of music.
    Easily control your sound and manage your calls from your headphones with the convenient buttons on the ear-cup.
    Siri or Hey Google is just a button away: activate the voice assistant of your device by pushing the multi-function button.`,
    url: `https://www.amazon.com/JBL-Tune-510BT-Ear-Headphones/dp/B08WM1V5P1/ref=sr_1_19?crid=1HOCIYY65TICQ&keywords=headphones&qid=1656507140&sprefix=h%2Caps%2C441&sr=8-19`,
    image1: `https://m.media-amazon.com/images/I/61f6S+WtUKL._AC_SL1500_.jpg`,
    image2: `https://m.media-amazon.com/images/I/61U11HyIY0L._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/61Dyj6grt9L._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:1,
    currentCategory:-1
  },
  {
    id: 5,
    name: 'Yamaha YH-L700A Wireless Noise-Cancelling Headphones with 3D Sound – Over-Ear, Listening Optimizer, Advanced ANC Active Noise-Cancelling, Bluetooth 5 with aptX Adaptive, Black',
    price: 307.99,
    description: `3D Sound Field with head tracking: experience movies and videos on your mobile device with cinema-like sound that immerses you in the action, at home or on the go
    Listening Optimizer: optimizes the sound in real time, adapting to you and your environment
    Advanced ANC: Cut the noise, not the music with this Yamaha-exclusive Active Noise-Cancelling technology that leaves your music pure and untouched
    Ambient Sound: choose when you need to be aware of your surroundings
    Listening Care: intelligent equalization for full-range sound at lower listening volumes, including dynamic monitoring of content and background noise levels
    Bluetooth 5 with aptX Adaptive: stable wireless connectivity and premium streaming quality
    Simple controls: make phone calls, activate Siri/Google Assistant and control your music with easy-to-find buttons on the earcups
    Long battery life: up to 34 hours of battery life with Advanced ANC on
    Take them everywhere: folding/swiveling earcup design
    What’s included: YH-L700A headphones, carrying case, USB-C cable, audio cable and flight adapter. iOS/Android app available to download`,
    url: `https://www.amazon.com/Yamaha-YH-L700A-Wireless-Noise-Cancelling-Headphones/dp/B08Q1L8CN2/ref=sr_1_33?crid=1HOCIYY65TICQ&keywords=headphones&qid=1656507787&sprefix=h%2Caps%2C441&sr=8-33`,
    image1: `https://m.media-amazon.com/images/I/61j339YZdiL._AC_SL1000_.jpg`,
    image2: `https://m.media-amazon.com/images/I/61Ep9pFMLjL._AC_SL1000_.jpg`,
    image3: `https://m.media-amazon.com/images/I/618pgPyKTZL._AC_SL1000_.jpg`,
    isActive:true,
    likes:0,
    categoryId:1,
    currentCategory:-1
  },


  {
    id: 6,
    name: 'Edifier R1280T Powered Bookshelf Speakers - 2.0 Stereo Active Near Field Monitors - Studio Monitor Speaker - Wooden Enclosure - 42 Watts RMS',
    price: 119.99,
    description: `2 x AUX INPUT - Convenient connection to any device that has a 3.5mm headphone output or dual RCA output. Connect to two devices via AUX at the same time, no plugging and switching needed. (None Bluetooth version)
    STUDIO SOUND QUALITY - Natural sound reproduction from 13mm silk dome tweeter and 4 inch full range unit
    REMOTE CONTROL - Adjust volume at your figure tips. Bass and treble control located on the side of main speaker.
    CLASSIC WOOD FINISH - High quality MDF wood build finished with wood effect vinyl serves as a great compliment to any home decor.
    2 YEAR WARRANTY - Guaranteed high quality and reliability with hassle-free parts and labor warranty for two years in USA and Canada.`,
    url: `https://www.amazon.com/Edifier-R1280T-Powered-Bookshelf-Speakers/dp/B016P9HJIA/ref=sr_1_6?crid=2DY5BGDWNXRSM&keywords=speakers&qid=1656508191&sprefix=speaker%2Caps%2C445&sr=8-6`,
    image1: `https://m.media-amazon.com/images/I/71o5w0ZfptL._AC_SL1500_.jpg`,
    image2: `https://m.media-amazon.com/images/I/61rAsRk0r3L._AC_SL1000_.jpg`,
    image3: `https://m.media-amazon.com/images/I/71OKU4jssnL._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:2,
    currentCategory:-1
  },
  {
    id: 7,
    name: 'Amazon Basics Computer Speakers for Desktop or Laptop PC | USB-Powered, Black',
    price: 13.65,
    description: `USB-powered (5V) speakers plug directly into your computer for portable convenience
    Turn the speakers on and adjust the volume using one simple control (located on the front of the speakers); volume control includes On/Standby
    Simple plug-and-play setup (no drivers needed); can be used with headphones via the 3.5mm jack connector
    Frequency range of 103 Hz - 20 KHz; 2.2 watts of total RMS power (1.1 watts per speaker)
    Measures 2.76 by 3.55 by 5.3 inches (LxWxH); weighs approximately 1.4 pounds;
    `,
    url: `https://www.amazon.com/AmazonBasics-Computer-Speakers-Desktop-USB-Powered/dp/B07D7TV5J3/ref=sr_1_3?crid=2DY5BGDWNXRSM&keywords=speakers&qid=1656508418&sprefix=speaker%2Caps%2C445&sr=8-3`,
    image1: `https://m.media-amazon.com/images/I/91Qr45nRJAL._AC_SL1500_.jpg`,
    image2: `https://m.media-amazon.com/images/I/8123mfNtnaS._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/816l8DJwjBL._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:2,
    currentCategory:-1
  },
  {
    id: 8,
    name: 'Klipsch RP-600M Reference Premiere Bookshelf Speakers - Pair (Ebony)',
    price: 548.99,
    description: `1” titanium lts vented tweeter with hybrid tractrix Horn
    6.5" Spun copper cerametallic woofers
    Bass-reflex via rear-firing tractrix port
    Dual binding posts for bi-wire/bi-amp
    Strong, flexible removable magnetic grille`,
    url: `https://www.amazon.com/Klipsch-Reference-Premiere-Bookshelf-Speakers/dp/B07G3D2C8S/ref=sr_1_18?crid=2DY5BGDWNXRSM&keywords=speakers&qid=1656508418&sprefix=speaker%2Caps%2C445&sr=8-18`,
    image1: `https://m.media-amazon.com/images/I/710NHM+gyNL._AC_SL1500_.jpg`,
    image2: `https://m.media-amazon.com/images/I/717H9uPYOeL._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/71w4cWSKsUL._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:2,
    currentCategory:-1
  },
  {
    id: 9,
    name: 'Sony SSCS5 3-Way 3-Driver Bookshelf Speaker System (Pair) - Black',
    price: 228.00,
    description: `Bookshelf speaker with Hi-Res Audio perfect for your home theater or music listening setup
    Amplify your movie, music, and gaming experience with a speaker that provides full frequency audio with a three-way, three-driver speaker system
    Create a robust 5.1.2 home theater setup perfect for Dolby Atmos with the complete range of CS speakers from Sony with 2 SSCS5 bookshelf speakers, 1 SSCS8 center channel speaker, 2 SSCS3 tower speakers, 2 SSCSE Dolby Atmos enabled speakers, and the SACS9 subwoofer
    ¾ in. super tweeter and 1” tweeter accurately reproduce high frequency sounds for an expansive soundstage
    5.12” woofer delivers deep, stable bass and detailed mid-range sounds
    Optimized crossover componentry creates clear crisp sound
    100 W maximum input power
    Two speakers per carton
    `,
    url: `https://www.amazon.com/Sony-SSCS5-3-Driver-Bookshelf-Speaker/dp/B00O8YLMVA/ref=sr_1_24?crid=2DY5BGDWNXRSM&keywords=speakers&qid=1656508828&sprefix=speaker%2Caps%2C445&sr=8-24`,
    image1: `https://m.media-amazon.com/images/I/71Qt98NR8lL._AC_SL1200_.jpg`,
    image2: `https://m.media-amazon.com/images/I/61yM7-HcDgL._AC_SL1200_.jpg`,
    image3: `https://m.media-amazon.com/images/I/61kcbSB0RQL._AC_SL1200_.jpg`,
    isActive:true,
    likes:0,
    categoryId:2,
    currentCategory:-1
  },
  {
    id: 10,
    name: 'Polk Audio T15 100 Watt Home Theater Bookshelf Speakers – Hi-Res Audio with Deep Bass Response | Dolby and DTS Surround | Wall-Mountable| Pair, Black',
    price: 99.00,
    description: `GET SUPERIOR HOME THEATER EXPERIENCE WITH IMMERSIVE SURROUND SOUND – Featuring (1) 0.75" tweeter & (1) 5.25" Dynamic Balance Driver, these speakers are designed to produce a natural, well-balanced sound with massive bass even at the lowest frequencies
    Use these wall-mountable bookshelf speakers as FRONT, LEFT-RIGHT SETUP, SURROUNDS OR AS REAR SPEAKERS and get mesmerized by detailed audio with crystal clear vocals, enough to fill any small to medium sized room
    CREATE A FULL-FLEDGED 5.1 HOME THEATER SETUP with the complete range of T-series speakers from Polk with two T50 Tower Speakers, one T30 Center Channel, two T15 Bookshelf speakers and a subwoofer
    Polk speakers are COMPATIBLE WITH MOST HOME THEATER AV RECEIVERS giving you many setup arrangement options - in single or multi-room with 2.0, 2.1, 3.1 systems or an immersive 5.1, 7.1 or 9.1 setup
    POLK'S UNMATCHED QUALITY AT AN AFFORDABLE PRICE. With these value-priced speakers, you can now enjoy premium acoustics, high quality construction, easy setup and a spectacular theater experience right at home`,
    url: `https://www.amazon.com/Polk-Audio-T15-Bookshelf-Speakers/dp/B002RJLHB8/ref=sr_1_34?crid=2DY5BGDWNXRSM&keywords=speakers&qid=1656509031&sprefix=speaker%2Caps%2C445&sr=8-34&th=1`,
    image1: `https://m.media-amazon.com/images/I/6179HhYbVrL._AC_SL1200_.jpg`,
    image2: `https://m.media-amazon.com/images/I/61DWEcdrW6L._AC_SL1187_.jpg`,
    image3: `https://m.media-amazon.com/images/I/717LLxIg5CL._AC_SL1187_.jpg`,
    isActive:true,
    likes:0,
    categoryId:2,
    currentCategory:-1
  },


  {
    id: 11,
    name: 'Panasonic Portable AM / FM Radio, Battery Operated Analog Radio, AC Powered, Silver (RF-2400D)',
    price: 24.99,
    description: `SIMPLE, EASY-TO-USE FM/AM RADIO WITH HIGH QUALITY SOUND: Portable handheld radio with digital tuner has a simple, easy-to-use interface, with antennas that pick up both AM and FM signals
    EASY-TO-SEE DESIGN: Large dial with fluorescent pointer allows for easy viewing, even in the dark
    SMOOTH TUNING: Digital tuner with AFC (Auto Frequency Control) enables easy and stable tuning
    PERFECT FOR CAMPING, SEVERE WEATHER, OR POWER OUTAGES: Use with batteries or plug--radio comes with an AC adaptor, and also takes 4 batteries (AA/LR6/R6)
    EARPHONE/ HEADPHONE COMPATIBLE: Plug in any headphones with a 3.5 millimeter jack for privacy as you listen`,
    url: `https://www.amazon.com/Panasonic-RF-2400D-AM-Radio-Silver/dp/B00007KDX6/ref=sr_1_5?crid=9AQJ2NH1R61&keywords=radio&qid=1656509367&sprefix=radi%2Caps%2C346&sr=8-5`,
    image1: `https://m.media-amazon.com/images/I/81s5S0s2IGL._AC_SL1500_.jpg`,
    image2: `https://m.media-amazon.com/images/I/81V9Sgmn-dL._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/81UxBy0L2xL._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:3,
    currentCategory:-1
  },
  {
    id: 12,
    name: 'Eton Elite, The Classic AM/FM/LW/VHF/Shortwave Radio with Single Side Band',
    price: 499.99,
    description: `On Every Wavelength: The Eton Satellite 750 broadcasts every radio wavelength including AM,FM, LW, SW, SSB and VHF aircraft band frequencies; 360° rotating AM antenna pulls in even the weakest signals for full, bold sound
    Strong and Sensitive: DSP Technology enhances tuning sensitivity and fields out interference for better quality; Program in up to 1000 channels, 100 for each band, plus you can customize up to 55 channels to tune into your favorite stations with ease
    In and Out: Connect any audio device using the line input and listen to your favorite music and media through the Eton Satellit750’s speakers; Or broadcast your radio to other devices using the line output; Features dual alarm clock for multiple alarms
    Keep Connected: From weather alert radios and backup battery packs to solar-powered sound systems, we'll keep you connected and in the know at home, in the office, on the road or in the great outdoors
    Eton's Commitment to Preparedness: We're committed to helping you be prepared for everyday fun and unexpected emergency, whether you’re out on a 10-day backpacking trip or barbecuing in the backyard`,
    url: `https://www.amazon.com/Eton-Classic-Clear-Sounding-Shortwave-NELITE750/dp/B08BVSCY8G/ref=sr_1_8?crid=9AQJ2NH1R61&keywords=radio&qid=1656509679&sprefix=radi%2Caps%2C346&sr=8-8`,
    image1: `https://m.media-amazon.com/images/I/81NZLv3eC9L._AC_SL1500_.jpg`,
    image2: `https://m.media-amazon.com/images/I/71SRKJ8SzJL._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/61FIkX-qnBL._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:3,
    currentCategory:-1
  },
  {
    id: 13,
    name: 'Studebaker SB2002TE Portable AM/FM Radio with Headphone Jack and aux-in Jack (Teal/White)',
    price: 26.88,
    description: `AM/FM Analog Radio
    3.5mm Headphone Jack
    Aux-in Jack for listening to audio from your smartphone or tablet
    3" Speaker
    AC/DC operation`,
    url: `https://www.amazon.com/Studebaker-SB2002TE-Portable-Headphone-Listening/dp/B08FRS478R/ref=sr_1_9?crid=9AQJ2NH1R61&keywords=radio&qid=1656509679&sprefix=radi%2Caps%2C346&sr=8-9&th=1`,
    image1: `https://m.media-amazon.com/images/I/81nLrILntvL._AC_SL1500_.jpg`,
    image2: `https://m.media-amazon.com/images/I/81EqbM14ldL._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/71hISzGuBsL._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:3,
    currentCategory:-1
  },
  {
    id: 14,
    name: 'Tecsun H501 Digital Worldband AM/FM Shortwave Longwave Radio with SSB Reception, Dual Speakers, & MP3 Player, Matte Black',
    price: 349.99,
    description: `A digital portable receiver with comprehensive radio frequency coverage including AM, FM, longwave, shortwave, and single side band, and an MP3 player with micro-SD input, compatible with FLAC / WAV/ APE / WMA and MP3 formats, a Sandisk Ultra 16GB micro-SD card is included
    Analog high-IF AM circuitry plus triple conversion IF and modern DSP digital demodulation technology as well as synchronized detection for enhanced and unparalleled reception sensitivity, selectivity, and anti-image interference capability across the bands
    Dual premium full-range 6 ohms / 3 watts speakers with built-in class AB amplifier and treble/bass controls delivers loud, rich, crispy, dynamic and distortion-free sound for utmost entertainment experience, a 3.5 mm stereo earphone jack for private listening (stereo earphones included)
    Other convenient features include an alarm clock with snooze function; a sleep timer of up to 120 minutes; USB audio input; external antenna input; 3.5mm audio output; 3,150 memories for easy access to frequently listened stations; keylock function for preserving settings; and a few undisclosed gems to be discovered by end users
    Powered by one single 3.7V / 2,600 mAh 18650 Li-ion rechargeable battery with built-in charger, 2 batteries included`,
    url: `https://www.amazon.com/H501-Worldband-Shortwave-Longwave-Reception/dp/B007NU351Q/ref=sr_1_21?crid=9AQJ2NH1R61&keywords=radio&qid=1656509679&sprefix=radi%2Caps%2C346&sr=8-21`,
    image1: `https://m.media-amazon.com/images/I/71y9R1UnrsL._AC_SL1300_.jpg`,
    image2: `https://m.media-amazon.com/images/I/7178ZVp3ViL._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/41YarsGO9TL._AC_.jpg`,
    isActive:true,
    likes:0,
    categoryId:3,
    currentCategory:-1
  },
  {
    id: 15,
    name: 'Retro Portable Radio AM FM Shortwave Radio Transistor Battery Operated Vintage Radio with Bluetooth Speaker, 3-Way Power Sources, Enhanced Bass, AUX TF Card USB Disk MP3 Player[2022 Upgraded Version]',
    price: 109.99,
    description: `【Excellent Reception】 Equipped with powerful DSP chip and 50cm long retractable antenna, this analog tuning vintage radio has excellent signal quality to pick up enough stations. Comes with big old-school tuner dial with compact tuning knob. No needle drifts and the tuning is very spot on. Never miss a ball game and get the latest weather report wherever you are.
    【3 Options for Charging 】AC powered radio with three ways of charging, makes sure never worry about power. You’ll need AC power when in bedroom, kitchen or office. Built-in 1200mAH rechargeable battery is perfect choice when you have a backyard BBQ. D-cell battery operated radio (NOT INCLUDED) is an essential addition to an emergency or camping kit. Note:To avoid the radio or batteries to be burnt out, please take the D-cell batteries out while charging with the rechargeable battery.
    【5 in 1 Speaker Radio 】More than an portable shortwave radios, also is a portable vintage bluetooth radio that keeps up with today’s tech, too. Allows you to enjoy a rich and well-balanced sound of classic, country and rock music by Bluetooth, TF card, USB disk and AUX mode. And Bluetooth 4.0 can hook up to your device in an instant. Note: NO EARPHONE JACK
    【Straightforward to Use】Weighs only 2.7lb and measures 9.1*3.9*5.9 inch. A simple vintage portable radio with big analog dial with warm glow inside, is more intuitive and pleasing than push-button digital interfaces. No more confusing buttons, it’s easy to use, just like a radio from a generation ago. And the portable handle included makes it easy to carry, perfect for old folks.
    【A Nice Gift Choice】Have classic vintage look with today’s technology. J-110 is an accent to the furniture, which makes you feel the passions of good old days. The retro radio also makes great gift for recepient who enjoyed the original design of old transistor radio. It’s suitable for any occasions including father's day, birthdays, weddings, anniversaries, housewarming party and Christmas.`,
    url: `https://www.amazon.com/dp/B08PBHY7HD?pd_rd_i=B08PBHY7HD&pf_rd_p=7672bfb7-93b0-4322-b745-2104db09c4df&pf_rd_r=MAA8AEFRKPB8K8FVSEFN&pd_rd_wg=U5zP7&pd_rd_w=DUP4C&pd_rd_r=dfa1fbd6-efcd-4c59-bbaf-bac8e2b7cde1`,
    image1: `https://m.media-amazon.com/images/I/71RfRZP2LWL._AC_SL1194_.jpg`,
    image2: `https://m.media-amazon.com/images/I/81cFFvx3hyL._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/81y7zUdlJdL._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:3,
    currentCategory:-1
  },


  {
    id: 16,
    name: 'Victrola V1 Soundbar System with Built in Record Player and Bluetooth Streaming',
    price: 299.99,
    description: `Record player that sounds like a hi-fi with built-in high fidelity stereo speakers
    Simple optical connection instantly turn the system into a high-end, stylish soundbar for any television
    Wireless Bluetooth connectivity allows you to stream music from a Bluetooth device or external Bluetooth speaker
    Multi-function metal remote control for easy volume and source control from anywhere in the room
    Metal tonearm with adjustable counterweight and anti-skate features to protect your records
    Anti-vibration belt drive system allows your records to be played crisp and clear at high-volumes without distortion
    Metal platter with silicone slip mat protects your vinyl and will last for years to come
    Multi-function, illuminated control knob with built in voice confirmation
    `,
    url: `https://www.amazon.com/Victrola-Premiere-V1-Turntable-Stereo/dp/B09FF7GXS8/ref=sr_1_2_sspa?crid=319CGZGQ4JWFX&keywords=vinyl+record+player&qid=1656518291&sprefix=%2Caps%2C236&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUE9OV0wzOUdVNVZVJmVuY3J5cHRlZElkPUEwMTIwNTE0MTZaV0JEMFMzUVFNUSZlbmNyeXB0ZWRBZElkPUEwOTc5NDMxVUxYNDg0N01ENEFLJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==`,
    image1: `https://m.media-amazon.com/images/I/61QNVK59cwL._AC_SL1200_.jpg`,
    image2: `https://m.media-amazon.com/images/I/61bCPY648xL._AC_SL1200_.jpg`,
    image3: `https://m.media-amazon.com/images/I/61lR+VCedoL._AC_SL1200_.jpg`,
    isActive:true,
    likes:0,
    categoryId:4,
    currentCategory:-1
  },
  {
    id: 17,
    name: 'Yamaha MusicCast Vinyl 500 Wi-Fi Turntable (Piano Black)',
    price: 699.95,
    description: `Create a stereo system with musiccast wireless speakers. Place the Turntable and speakers wherever you want
    Expand to a multi-room Audio setup by syncing with musiccast wireless speakers in other rooms
    Stream music services with Wi-Fi, Bluetooth, airplay or Spotify connect; Rotation speed: 33-1/3 rpm, 45 rpm
    Yamaha hi-fi quality built for accuracy and sonic purity. Perfect for the audiophile or beginner vinyl collector
    Built-in phono preamp gives you flexibility to connect any Audio system, adding streaming service playback to your legacy hi-fi system`,
    url: `https://www.amazon.com/Yamaha-MusicCast-Vinyl-500-Turntable/dp/B07GQR3YBZ/ref=sr_1_6?crid=319CGZGQ4JWFX&keywords=vinyl%2Brecord%2Bplayer&qid=1656519269&sprefix=%2Caps%2C236&sr=8-6&th=1`,
    image1: `https://m.media-amazon.com/images/I/716qwCxOxpL._AC_SL1500_.jpg`,
    image2: `https://m.media-amazon.com/images/I/71vQASCSdpL._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/71wzfLUiiwL._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:4,
    currentCategory:-1
  },
  {
    id: 18,
    name: 'Victrola Wood Metropolitan Mid Century Modern Bluetooth Record Player with 3-Speed Turntable and Radio',
    price: 74.99,
    description: `Belt Driven, 3-speed Turntable (33 1/3, 45, 78 RPM) plays all of your favorite vinyl records
    Classic FM radio with analog tuner and "around the dial" Led lighting
    Wirelessly stream music from your Bluetooth enabled device, up to 33 feet away
    Features 3. 5mm aux-in and RCA output Connection
    Built-in stereo speakers`,
    url: `https://www.amazon.com/Victrola-Bluetooth-Centry-3-speed-Turntable/dp/B07G237HMN/ref=sr_1_10?crid=319CGZGQ4JWFX&keywords=vinyl+record+player&qid=1656519269&sprefix=%2Caps%2C236&sr=8-10`,
    image1: `https://m.media-amazon.com/images/I/81E6kTLri5L._AC_SL1500_.jpg`,
    image2: `https://m.media-amazon.com/images/I/61P5aJt0wXL._AC_SL1200_.jpg`,
    image3: `https://m.media-amazon.com/images/I/61hjgffO3pL._AC_SL1200_.jpg`,
    isActive:true,
    likes:0,
    categoryId:4,
    currentCategory:-1
  }, 
  {
    id: 19,
    name: 'Victrola Journey+ Bluetooth Suitcase Record Player, Dark Brown (VSC-400SB-DBR-SDF)',
    price: 69.99,
    description: `THREE SPEED BELT-DRIVEN TURNTABLE - This 3-speed (33 1/3, 45, 78 rpm) suitcase record player features UPGRADED PREMIUM SOUND QUALITY and sits on sound isolating feet that prevent vibration. It is perfect for your living room, bedroom or office.
    TAKE YOUR TUNES ANYWHERE - Housed in a vintage suitcase with an easy carry handle, Victrola's blend of retro and contemporary design give you the ultimate flexibility to listen to music where you want and how you want – a great choice for vinyl lovers
    EXPANDED CONNECTION OPTIONS - Stream smartphone audio through the turntable’s built-in Bluetooth speakers. Easily connect external speakers via the stereo RCA outputs, or use the Line input for non-Bluetooth devices like a CD player. For personal listening, connect your headphones to the headphone jack.
    NO STEREO SYSTEM OR EXTRA EQUIPMENT REQUIRED. Get it up and running in minutes. Retro looks combined with the convenience of modern technology makes this affordable record player ideal for beginners & vintage enthusiasts
    ALL THE CONTROLS YOU NEED - Features an Input select knob, Power/Volume Knob & an Auto stop switch that stops spinning records once the record is finished playing.
    A RECORD PLAYER THAT SUITS YOUR PERSONALITY - Combined with Victrola’s unparalleled sound quality and exquisite craftsmanship, and a wide range of styles, patterns and colors to choose from, get ready to create lifelong music memories`,
    url: `https://www.amazon.com/Victrola-Bluetooth-Portable-Suitcase-Turntable/dp/B0984RJRTV/ref=sr_1_28_sspa?crid=319CGZGQ4JWFX&keywords=vinyl+record+player&qid=1656519783&sprefix=%2Caps%2C236&sr=8-28-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExTkJRWlNZV1I3TFdOJmVuY3J5cHRlZElkPUEwNTM0MjY4MkZWUTFDUU9CVjVFUCZlbmNyeXB0ZWRBZElkPUExMDA5NTM2M0tRTU1SQ1BINlNISSZ3aWRnZXROYW1lPXNwX210ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=`,
    image1: `https://m.media-amazon.com/images/I/71xmluOIjRL._AC_SL1500_.jpg`,
    image2: `https://m.media-amazon.com/images/I/71NxS4a9DuL._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/71rT6ZQMNRL._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:4,
    currentCategory:-1
  }, 
  {
    id: 20,
    name: 'Audio-Technica AT-LP120XBT-USB-BK Wireless Direct-Drive Turntable, Black',
    price: 399.00,
    description: `Fully manual operation, selectable 33/45/78 RPM speeds with direct-drive, DC servo motor and adjustable dynamic anti-skate control
    Variable pitch control with quartz speed lock
    Stroboscopic platter with speed indicator and removable plug-type target light for easier cueing in low light
    Balanced S-shaped tonearm with hydraulically damped lift control and lockable rest
    AT-HS6 universal ½"-mount headshell and AT-VM95E Dual Magnet phono cartridge with 0.3 x 0.7 mil elliptical stylus
    Connectivity technology: Wired
    Included components: Turntable, USB cable, detachable RCA output cable (dual RCA male to dual RCA male), AC adapter, 45 RPM adapter, counterweight, felt mat, and removable hinged dust cover`,
    url: `https://www.amazon.com/Audio-Technica-AT-LP120XBT-USB-BK-Wireless-Direct-Drive-Turntable/dp/B089T77WK2/ref=sr_1_41?crid=319CGZGQ4JWFX&keywords=vinyl+record+player&qid=1656520158&sprefix=%2Caps%2C236&sr=8-41`,
    image1: `https://m.media-amazon.com/images/I/711Zi+DFyJL._AC_SL1500_.jpg`,
    image2: `https://m.media-amazon.com/images/I/71IquhwmnhL._AC_SL1500_.jpg`,
    image3: `https://m.media-amazon.com/images/I/91TQA85qKPL._AC_SL1500_.jpg`,
    isActive:true,
    likes:0,
    categoryId:4,
    currentCategory:-1
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/