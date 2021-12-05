dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "All Released", key: "canon" },
      { name: "Unreleased IDs, Deathdrops, and more", tooltip: "Yes", key: "ID" },
      { name: "Remixes", tooltip: "Yes", key: "REMIX" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Mitosis",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
  },
    {
    name: "Chemical Bond",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
  },
    {
    name: "SPLIT PERSONALITY",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
  },
    {
    name: "INTERFERENCE_03",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
  },
    {
    name: "0506+056",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
  },
    {
    name: "COALESCE",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
  },
    {
    name: "CATALYST",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
  },
    {
    name: "HIATUS",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
  },
    {
    name: "BLOODLINE",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
  },
    {
    name: "SONG SIX",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
  },
    {
    name: "HIATUS - Biicla Remix",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "REMIX" ]
    }
  },
      {
    name: "0506+056 - Opiuo Remix",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "REMIX" ]
    }
  },
      {
    name: "INTERFERENCE_03 - Deafheaven Remix",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "REMIX" ]
    }
  },
      {
    name: "SPLIT PERSONALITY - JMJ Remix",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "REMIX" ]
    }
  },
      {
    name: "CATALYST - REAPER Remix",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "REMIX" ]
    }
  },
        {
    name: "COALESCE - Claude VonStroke Remix",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "REMIX" ]
    }
  },
        {
    name: "BLOODLINE - Code Orange Remix",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "REMIX" ]
    }
  },
        {
    name: "SONG SIX - CloZee Remix",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "REMIX" ]
    }
  },
      {
    name: "Ether - EPROM Old School Deconstruction",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "REMIX" ]
    }
  },
	    {
    name: "Kiss Of Death",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
		},
	{
    name: "Point of Departure",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "Dioxide",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "Koolaid",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "M A L F U N K T",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "Delightful Intervention",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "Formality",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "Interference Two",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "Suspect",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "End of Time",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "Delightful Introduction",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "Danger",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "First Interference",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "Piston",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "Circadian",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "Ether",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "canon" ]
    }
	},
	{
    name: "Delightful Interception",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "ID" ]
    }
	},
		{
    name: "Eclipse",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "ID" ]
    }
	},
		{
    name: "Eternity [Part One]",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "ID" ]
    }
	},
		{
    name: "Backbone",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "ID" ]
    }
	},
		{
    name: "Busker",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "ID" ]
    }
	},
		{
    name: "Earwig",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "ID" ]
    }
	},
		{
    name: "ANSFCD_01",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "ID" ]
    }
	},
			{
    name: "LOYAL [DEATHPACT REPRISE]",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "ID" ]
    }
	},
		{
    name: "IN MY MIND [DEATHPACT REPRISE]",
    img: "kCMN55F.jpg",
    opts: {
      series: [ "ID" ]
    }
	}
];
