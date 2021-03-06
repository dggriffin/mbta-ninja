currentLine = function() {
  return Router.current().params.line;
};

currentTransitType = function() {
  return Router.current().params.type;
};

currentStations = function () {
  return stations[currentLine()];
};

listOfLines = function() {
  return {
    bus: [
      {
        line: "1",
        color: "silver-line",
        type: "bus",
        directions: [
          {direction: "1-central", path: "1-central"},
          {direction: "1-outsidething", path: "1-outsidething"}
        ]
      }
    ],
    subway: [
      {
        line: "Red Line",
        color: "red-line",
        type: "subway",
        directions: [
          {direction: "Northbound (to Alewife)", path: "Red Line - Northbound"},
          {direction: "Southbound (to Ashmont/Braintree)", path: "Red Line - Southbound"}
        ]
      },
      {
        line: "Orange Line",
        color: "orange-line",
        type: "subway",
        directions: [
          {direction: "Northbound (to Oakgrove)", path: "Orange Line - Northbound"},
          {direction: "Southbound (to Forest Hills)", path: "Orange Line - Southbound"}
        ]
      },
      {
        line: "Green Line",
        color: "green-line",
        type: "subway",
        directions: [
          {direction: "B - Westbound (to Boston College)", path: "Green Line B - Westbound"},
          {direction: "B - Eastbound (to Park St)", path: "Green Line B - Eastbound"},
          {direction: "C - Westbound (to Cleveland Circle)", path: "Green Line C - Westbound"},
          {direction: "C - Eastbound (to North Station)", path: "Green Line C - Eastbound"},
          {direction: "D - Westbound (to Riverside)", path: "Green Line D - Westbound"},
          {direction: "D - Eastbound (to Park St)", path: "Green Line D - Eastbound"},
          {direction: "E - Westbound (to Heath St)", path: "Green Line E - Westbound"},
          {direction: "E - Eastbound (to Lechmere)", path: "Green Line E - Eastbound"}
        ]
      },
      {
        line: "Blue Line",
        color: "blue-line",
        type: "subway",
        directions: [
          {direction: "Northbound (to Wonderland)", path: "Blue Line - Northbound"},
          {direction: "Southbound (to Bowdoin)", path: "Blue Line - Southbound"}
        ]
      },
      {
        line: "Silver Line",
        color: "silver-line",
        type: "bus",
        directions: [
          {direction: "SL1 Inbound (to South Station)", path: "SL1 - Inbound"},
          {direction: "SL1 Outbound (to Logan Airport)", path: "SL1 - Outbound"},
          {direction: "SL2 Inbound (to South Station)", path: "SL2 - Inbound"},
          {direction: "SL2 Outbound (to Design Center)", path: "SL2 - Outbound"},
          {direction: "SL4 Inbound (to South Station)", path: "SL4 - Inbound"},
          {direction: "SL4 Outbound (to Dudley Station)", path: "SL4 - Outbound"},
          {direction: "SL5 Inbound (to Downtown Crossing)", path: "SL5 - Inbound"},
          {direction: "SL5 Outbound (to Dudley Station)", path: "SL5 - Outbound"}
        ]
      }
    ],
    train: [
      {
        line: "Fairmount Line",
        color: "purple-line",
        type: "train",
        directions: [
          {direction: "Inbound (to Boston)", path: "Fairmount Line - Inbound"},
          {direction: "Outbound (to Readville)", path: "Fairmount Line - Outbound"}
        ]
      },
      {
        line: "Fitchburg Line",
        color: "purple-line",
        type: "train",
        directions: [
          {direction: "Inbound (to Boston)", path: "Fitchburg Line - Inbound"},
          {direction: "Outbound (to Fitchburg)", path: "Fitchburg Line - Outbound"}
        ]
      },
      {
        line: "Framingham/Worcester Line",
        color: "purple-line",
        type: "train",
        directions: [
          {direction: "Inbound (to Boston)", path: "Framingham-Worcester Line - Inbound"},
          {direction: "Outbound (to Worcester)", path: "Framingham-Worcester Line - Outbound"}
        ]
      },
      {
        line: "Franklin Line",
        color: "purple-line",
        type: "train",
        directions: [
          {direction: "Inbound (to Boston)", path: "Franklin Line - Inbound"},
          {direction: "Outbound (to Forge Park/495)", path: "Franklin Line - Outbound"}
        ]
      },
      {
        line: "Greenbush Line",
        color: "purple-line",
        type: "train",
        directions: [
          {direction: "Inbound (to Boston)", path: "Greenbush Line - Inbound"},
          {direction: "Outbound (to Greenbush)", path: "Greenbush Line - Outbound"}
        ]
      },
      {
        line: "Haverhill Line",
        color: "purple-line",
        type: "train",
        directions: [
          {direction: "Inbound (to Boston)", path: "Haverhill Line - Inbound"},
          {direction: "Outbound (to Haverhill)", path: "Haverhill Line - Outbound"}
        ]
      },
      {
        line: "Kingston/Plymouth Line",
        color: "purple-line",
        type: "train",
        directions: [
          {direction: "Inbound (to Boston)", path: "Kingston-Plymouth Line - Inbound"},
          {direction: "Outbound (to Kingston/Plymouth)", path: "Kingston-Plymouth Line - Outbound"}
        ]
      },
      {
        line: "Lowell Line",
        color: "purple-line",
        type: "train",
        directions: [
          {direction: "Inbound (to Boston)", path: "Lowell Line - Inbound"},
          {direction: "Outbound (to Lowell)", path: "Lowell Line - Outbound"}
        ]
      },
      {
        line: "Middleborough/Lakeville Line",
        color: "purple-line",
        type: "train",
        directions: [
          {direction: "Inbound (to Boston)", path: "Middleborough-Lakeville Line - Inbound"},
          {direction: "Outbound (to Middleborough/Lakeville)", path: "Middleborough-Lakeville Line - Outbound"}
        ]
      },
      {
        line: "Needham Line",
        color: "purple-line",
        type: "train",
        directions: [
          {direction: "Inbound (to Boston)", path: "Needham Line - Inbound"},
          {direction: "Outbound (to Needham)", path: "Needham Line - Outbound"}
        ]
      },
      {
        line: "Newburyport/Rockport Line",
        color: "purple-line",
        type: "train",
        directions: [
          {direction: "Inbound (to Boston)", path: "Newburyport-Rockport Line - Inbound"},
          {direction: "Outbound (to Rockport)", path: "Newburyport-Rockport Line - Outbound"}
        ]
      },
      {
        line: "Providence/Stoughton Line",
        color: "purple-line",
        type: "train",
        directions: [
          {direction: "Inbound (to Boston)", path: "Providence-Stoughton Line - Inbound"},
          {direction: "Outbound (to Stoughton)", path: "Providence-Stoughton Line - Outbound"}
        ]
      }
    ]
  };
};

stations = {
  '1-central': [
    {name: 'test1'},
    {name: 'test2'},
    {name: 'test3'}
  ],
  '1-outsidething': [
    {name: '-test1'},
    {name: '-test2'},
    {name: '-test3'}
  ],
  'Red Line - Northbound': [
    {name: 'Ashmont'},
    {name: 'Shawmut'},
    {name: 'Fields Corner'},
    {name: 'Savin Hill'},
    {name: 'Braintree'},
    {name: 'Quincy Adams'},
    {name: 'Quincy Center'},
    {name: 'Wollaston'},
    {name: 'North Quincy'},
    {name: 'JFK/UMass'},
    {name: 'Andrew'},
    {name: 'Broadway'},
    {name: 'South Station'},
    {name: 'Downtown Crossing'},
    {name: 'Park Street'},
    {name: 'Charles/MGH'},
    {name: 'Kendall'},
    {name: 'Central Square'},
    {name: 'Harvard Square'},
    {name: 'Porter Square'},
    {name: 'Davis'},
    {name: 'Alewife'}
  ],
  'Red Line - Southbound': [
    {name: 'Alewife'},
    {name: 'Davis'},
    {name: 'Porter Square'},
    {name: 'Harvard Square'},
    {name: 'Central Square'},
    {name: 'Kendall'},
    {name: 'Charles/MGH'},
    {name: 'Park Street'},
    {name: 'Downtown Crossing'},
    {name: 'South Station'},
    {name: 'Broadway'},
    {name: 'Andrew'},
    {name: 'JFK/UMass'},
    {name: 'North Quincy'},
    {name: 'Wollaston'},
    {name: 'Quincy Center'},
    {name: 'Quincy Adams'},
    {name: 'Braintree'},
    {name: 'Savin Hill'},
    {name: 'Fields Corner'},
    {name: 'Shawmut'},
    {name: 'Ashmont'}
  ],
  'Orange Line - Northbound': [
    {name: 'Forest Hills'},
    {name: 'Green Street'},
    {name: 'Stony Brook'},
    {name: 'Jackson Square'},
    {name: 'Roxbury Crossing'},
    {name: 'Ruggles'},
    {name: 'Massachusetts Ave.'},
    {name: 'Back Bay'},
    {name: 'Tufts Medical Center'},
    {name: 'Chinatown'},
    {name: 'Downtown Crossing'},
    {name: 'State Street'},
    {name: 'Haymarket'},
    {name: 'North Station'},
    {name: 'Community College'},
    {name: 'Sullivan Square'},
    {name: 'Assembly'},
    {name: 'Wellington'},
    {name: 'Malden Center'},
    {name: 'Oak Grove'}
  ],
  'Orange Line - Southbound': [
    {name: 'Oak Grove'},
    {name: 'Malden Center'},
    {name: 'Wellington'},
    {name: 'Assembly'},
    {name: 'Sullivan Square'},
    {name: 'Community College'},
    {name: 'North Station'},
    {name: 'Haymarket'},
    {name: 'State Street'},
    {name: 'Downtown Crossing'},
    {name: 'Chinatown'},
    {name: 'Tufts Medical Center'},
    {name: 'Back Bay'},
    {name: 'Massachusetts Ave.'},
    {name: 'Ruggles'},
    {name: 'Roxbury Crossing'},
    {name: 'Jackson Square'},
    {name: 'Stony Brook'},
    {name: 'Green Street'},
    {name: 'Forest Hills'}
  ],
  'Blue Line - Northbound': [
    {name: 'Bowdoin'},
    {name: 'State'},
    {name: 'Aquarium'},
    {name: 'Maverick'},
    {name: 'Airport'},
    {name: 'Wood Island'},
    {name: 'Orient Heights'},
    {name: 'Suffolk Downs'},
    {name: 'Beachmont'},
    {name: 'Revere Beach'},
    {name: 'Wonderland'}
  ],
  'Blue Line - Southbound': [
    {name: 'Wonderland'},
    {name: 'Revere Beach'},
    {name: 'Beachmont'},
    {name: 'Suffolk Downs'},
    {name: 'Orient Heights'},
    {name: 'Wood Island'},
    {name: 'Airport'},
    {name: 'Maverick'},
    {name: 'Aquarium'},
    {name: 'State'},
    {name: 'Bowdoin'}
  ],
  'Green Line B - Westbound': [
    {name: 'Park Street'},
    {name: 'Boylston'},
    {name: 'Arlington'},
    {name: 'Copley'},
    {name: 'Hynes Convention Center'},
    {name: 'Kenmore'},
    {name: 'Blandford Street'},
    {name: 'Boston Univ. East'},
    {name: 'Boston Univ. Central'},
    {name: 'Boston Univ. West'},
    {name: 'Saint Paul Street'},
    {name: 'Pleasant Street'},
    {name: 'Babcock Street'},
    {name: 'Packards Corner'},
    {name: 'Harvard Ave.'},
    {name: 'Griggs Street'},
    {name: 'Allston Street'},
    {name: 'Warren Street'},
    {name: 'Washington Street'},
    {name: 'Sutherland Road'},
    {name: 'Chiswick Road'},
    {name: 'Chestnut Hill Ave.'},
    {name: 'South Street'},
    {name: 'Boston College'}
  ],
  'Green Line B - Eastbound': [
    {name: 'Boston College'},
    {name: 'South Street'},
    {name: 'Chestnut Hill Ave.'},
    {name: 'Chiswick Road'},
    {name: 'Sutherland Road'},
    {name: 'Washington Street'},
    {name: 'Warren Street'},
    {name: 'Allston Street'},
    {name: 'Griggs Street'},
    {name: 'Harvard Ave.'},
    {name: 'Packards Corner'},
    {name: 'Babcock Street'},
    {name: 'Pleasant Street'},
    {name: 'Saint Paul Street'},
    {name: 'Boston Univ. West'},
    {name: 'Boston Univ. Central'},
    {name: 'Boston Univ. East'},
    {name: 'Blandford Street'},
    {name: 'Kenmore'},
    {name: 'Hynes Convention Center'},
    {name: 'Copley'},
    {name: 'Arlington'},
    {name: 'Boylston'},
    {name: 'Park Street'}
  ],
  'Green Line C - Westbound': [
    {name: 'North Station'},
    {name: 'Haymarket'},
    {name: 'Park Street'},
    {name: 'Boylston'},
    {name: 'Arlington'},
    {name: 'Copley'},
    {name: 'Hynes Convention Center'},
    {name: 'Kenmore'},
    {name: 'Saint Mary Street'},
    {name: 'Hawes Street'},
    {name: 'Kent Street'},
    {name: 'Saint Paul Street'},
    {name: 'Coolidge Corner'},
    {name: 'Summit Ave.'},
    {name: 'Brandon Hall'},
    {name: 'Fairbanks Street'},
    {name: 'Washington Square'},
    {name: 'Tappan Street'},
    {name: 'Dean Road'},
    {name: 'Englewood Ave.'},
    {name: 'Cleveland Circle'}
  ],
  'Green Line C - Eastbound': [
    {name: 'Cleveland Circle'},
    {name: 'Englewood Ave.'},
    {name: 'Dean Road'},
    {name: 'Tappan Street'},
    {name: 'Washington Square'},
    {name: 'Fairbanks Street'},
    {name: 'Brandon Hall'},
    {name: 'Summit Ave.'},
    {name: 'Coolidge Corner'},
    {name: 'Saint Paul Street'},
    {name: 'Kent Street'},
    {name: 'Hawes Street'},
    {name: 'Saint Mary Street'},
    {name: 'Kenmore'},
    {name: 'Hynes Convention Center'},
    {name: 'Copley'},
    {name: 'Arlington'},
    {name: 'Boylston'},
    {name: 'Park Street'},
    {name: 'Haymarket'},
    {name: 'North Station'}
  ],
  'Green Line D - Westbound': [
    {name: 'Park Street'},
    {name: 'Boylston'},
    {name: 'Arlington'},
    {name: 'Copley'},
    {name: 'Hynes Convention Center'},
    {name: 'Kenmore'},
    {name: 'Fenway'},
    {name: 'Longwood'},
    {name: 'Brookline Village'},
    {name: 'Brookline Hills'},
    {name: 'Beaconsfield'},
    {name: 'Reservoir'},
    {name: 'Chestnut Hill'},
    {name: 'Newton Centre'},
    {name: 'Newton Highlands'},
    {name: 'Eliot'},
    {name: 'Waban'},
    {name: 'Woodland'},
    {name: 'Riverside'}
  ],
  'Green Line D - Eastbound': [
    {name: 'Riverside'},
    {name: 'Woodland'},
    {name: 'Waban'},
    {name: 'Eliot'},
    {name: 'Newton Highlands'},
    {name: 'Newton Centre'},
    {name: 'Chestnut Hill'},
    {name: 'Reservoir'},
    {name: 'Beaconsfield'},
    {name: 'Brookline Hills'},
    {name: 'Brookline Village'},
    {name: 'Longwood'},
    {name: 'Fenway'},
    {name: 'Kenmore'},
    {name: 'Hynes Convention Center'},
    {name: 'Copley'},
    {name: 'Arlington'},
    {name: 'Boylston'},
    {name: 'Park Street'}
  ],
  'Green Line E - Westbound': [
    {name: 'Lechmere'},
    {name: 'Science Park'},
    {name: 'North Station'},
    {name: 'Haymarket'},
    {name: 'Park Street'},
    {name: 'Boylston'},
    {name: 'Arlington'},
    {name: 'Copley'},
    {name: 'Prudential'},
    {name: 'Symphony'},
    {name: 'Northeastern University'},
    {name: 'Museum of Fine Arts'},
    {name: 'Longwood Medical Area'},
    {name: 'Brigham Circle'},
    {name: 'Fenwood Road'},
    {name: 'Mission Park'},
    {name: 'Riverway'},
    {name: 'Back of the Hill'},
    {name: 'Heath Street'}
  ],
  'Green Line E - Eastbound': [
    {name: 'Heath Street'},
    {name: 'Back of the Hill'},
    {name: 'Riverway'},
    {name: 'Mission Park'},
    {name: 'Fenwood Road'},
    {name: 'Brigham Circle'},
    {name: 'Longwood Medical Area'},
    {name: 'Museum of Fine Arts'},
    {name: 'Northeastern University'},
    {name: 'Symphony'},
    {name: 'Prudential'},
    {name: 'Copley'},
    {name: 'Arlington'},
    {name: 'Boylston'},
    {name: 'Park Street'},
    {name: 'Haymarket'},
    {name: 'North Station'},
    {name: 'Science Park'},
    {name: 'Lechmere'}
  ],
  'Fairmount Line - Inbound': [
    {name: 'Readville'},
    {name: 'Fairmount'},
    {name: 'Morton St.'},
    {name: 'Talbot Ave.'},
    {name: 'Four Corners/Geneva Ave.'},
    {name: 'Uphams Corner'},
    {name: 'Newmarket'},
    {name: 'South Station'}
  ],
  'Fairmount Line - Outbound': [
    {name: 'South Station'},
    {name: 'Newmarket'},
    {name: 'Uphams Corner'},
    {name: 'Four Corners/Geneva Ave.'},
    {name: 'Talbot Ave.'},
    {name: 'Morton St.'},
    {name: 'Fairmount'},
    {name: 'Readville'}
  ],
  'Fitchburg Line - Inbound': [
    {name: 'Fitchburg'},
    {name: 'N. Leominster'},
    {name: 'Shirley'},
    {name: 'Ayer'},
    {name: 'Littleton/495'},
    {name: 'S. Acton'},
    {name: 'W. Concord'},
    {name: 'Concord'},
    {name: 'Lincoln'},
    {name: 'Silver Hill'},
    {name: 'Hastings'},
    {name: 'Kendal Green'},
    {name: 'Brandeis/Roberts'},
    {name: 'Waltham'},
    {name: 'Waverley'},
    {name: 'Belmont'},
    {name: 'Porter Sq.'},
    {name: 'North Station'}
  ],
  'Fitchburg Line - Outbound': [
    {name: 'North Station'},
    {name: 'Porter Sq.'},
    {name: 'Belmont'},
    {name: 'Waverley'},
    {name: 'Waltham'},
    {name: 'Brandeis/Roberts'},
    {name: 'Kendal Green'},
    {name: 'Hastings'},
    {name: 'Silver Hill'},
    {name: 'Lincoln'},
    {name: 'Concord'},
    {name: 'W. Concord'},
    {name: 'S. Acton'},
    {name: 'Littleton/495'},
    {name: 'Ayer'},
    {name: 'Shirley'},
    {name: 'N. Leominster'},
    {name: 'Fitchburg'}
  ],
  'Framingham-Worcester Line - Inbound': [
    {name: 'Worcester'},
    {name: 'Grafton'},
    {name: 'Westborough'},
    {name: 'Southborough'},
    {name: 'Ashland'},
    {name: 'Framingham'},
    {name: 'W. Natick'},
    {name: 'Natick Center'},
    {name: 'Wellesley Sq.'},
    {name: 'Wellesley Hills'},
    {name: 'Wellesley Farms'},
    {name: 'Auburndale'},
    {name: 'W. Newton'},
    {name: 'Newtonville'},
    {name: 'Yawkey'},
    {name: 'Back Bay'},
    {name: 'South Station'}
  ],
  'Framingham-Worcester Line - Outbound': [
    {name: 'South Station'},
    {name: 'Back Bay'},
    {name: 'Yawkey'},
    {name: 'Newtonville'},
    {name: 'W. Newton'},
    {name: 'Auburndale'},
    {name: 'Wellesley Farms'},
    {name: 'Wellesley Hills'},
    {name: 'Wellesley Sq.'},
    {name: 'Natick Center'},
    {name: 'W. Natick'},
    {name: 'Framingham'},
    {name: 'Ashland'},
    {name: 'Southborough'},
    {name: 'Westborough'},
    {name: 'Grafton'},
    {name: 'Worcester'}
  ],
  'Lowell Line - Inbound': [
    {name: 'Lowell'},
    {name: 'North Billerica'},
    {name: 'Haverhill'},
    {name: 'Wilmington'},
    {name: 'Anderson/Woburn'},
    {name: 'Mishawum'},
    {name: 'Winchester Center'},
    {name: 'Wedgemere'},
    {name: 'West Medford'},
    {name: 'North Station'}
  ],
  'Lowell Line - Outbound': [
    {name: 'North Station'},
    {name: 'West Medford'},
    {name: 'Wedgemere'},
    {name: 'Winchester Center'},
    {name: 'Mishawum'},
    {name: 'Anderson/Woburn'},
    {name: 'Wilmington'},
    {name: 'Haverhill'},
    {name: 'North Billerica'},
    {name: 'Lowell'}
  ],
  'Middleborough-Lakeville Line - Inbound': [
    {name: 'Middleborough/Lakeville'},
    {name: 'Bridgewater'},
    {name: 'Campello'},
    {name: 'Brockton'},
    {name: 'Montello'},
    {name: 'Holbrook/Randolph'},
    {name: 'Braintree'},
    {name: 'Quincy Center'},
    {name: 'JFK/UMass'},
    {name: 'South Station'}
  ],
  'Middleborough-Lakeville Line - Outbound': [
    {name: 'South Station'},
    {name: 'JFK/UMass'},
    {name: 'Quincy Center'},
    {name: 'Braintree'},
    {name: 'Holbrook/Randolph'},
    {name: 'Montello'},
    {name: 'Brockton'},
    {name: 'Campello'},
    {name: 'Bridgewater'},
    {name: 'Middleborough/Lakeville'}
  ],
  'Needham Line - Inbound': [
    {name: 'Needham Heights'},
    {name: 'Needham Center'},
    {name: 'Needham Junction'},
    {name: 'Hersey'},
    {name: 'West Roxbury'},
    {name: 'Highland'},
    {name: 'Bellevue'},
    {name: 'Roslindale Village'},
    {name: 'Forest Hills'},
    {name: 'Ruggles'},
    {name: 'Back Bay'},
    {name: 'South Station'}
  ],
  'Needham Line - Outbound': [
    {name: 'South Station'},
    {name: 'Back Bay'},
    {name: 'Ruggles'},
    {name: 'Forest Hills'},
    {name: 'Roslindale Village'},
    {name: 'Bellevue'},
    {name: 'Highland'},
    {name: 'West Roxbury'},
    {name: 'Hersey'},
    {name: 'Needham Junction'},
    {name: 'Needham Center'},
    {name: 'Needham Heights'}
  ],
  'Franklin Line - Inbound': [
    {name: 'Forge Park/495'},
    {name: 'Franklin'},
    {name: 'Norfolk'},
    {name: 'Walpole'},
    {name: 'Plimptonville'},
    {name: 'Windsor Gardens'},
    {name: 'Norwood Central'},
    {name: 'Norwood Depot'},
    {name: 'Islington'},
    {name: 'Dedham Corp. Center'},
    {name: 'Endicott'},
    {name: 'Readville'},
    {name: 'Hyde Park'},
    {name: 'Ruggles'},
    {name: 'Back Bay'},
    {name: 'South Station'}
  ],
  'Franklin Line - Outbound': [
    {name: 'South Station'},
    {name: 'Back Bay'},
    {name: 'Ruggles'},
    {name: 'Hyde Park'},
    {name: 'Readville'},
    {name: 'Endicott'},
    {name: 'Dedham Corp. Center'},
    {name: 'Islington'},
    {name: 'Norwood Depot'},
    {name: 'Norwood Central'},
    {name: 'Windsor Gardens'},
    {name: 'Plimptonville'},
    {name: 'Walpole'},
    {name: 'Norfolk'},
    {name: 'Franklin'},
    {name: 'Forge Park/495'}
  ],
  'Greenbush Line - Inbound': [
    {name: 'Greenbush'},
    {name: 'North Scituate'},
    {name: 'Cohasset'},
    {name: 'Nantasket Junction'},
    {name: 'West Hingham'},
    {name: 'East Weymouth'},
    {name: 'Weymouth Landing/East Braintree'},
    {name: 'Quincy Center'},
    {name: 'JFK/UMass'},
    {name: 'South Station'}
  ],
  'Greenbush Line - Outbound': [
    {name: 'South Station'},
    {name: 'JFK/UMass'},
    {name: 'Quincy Center'},
    {name: 'Weymouth Landing/East Braintree'},
    {name: 'East Weymouth'},
    {name: 'West Hingham'},
    {name: 'Nantasket Junction'},
    {name: 'Cohasset'},
    {name: 'North Scituate'},
    {name: 'Greenbush'}
  ],
  'Kingston-Plymouth Line - Inbound': [
    {name: 'Kingston'},
    {name: 'Plymouth'},
    {name: 'Halifax'},
    {name: 'Hanson'},
    {name: 'Whitman'},
    {name: 'Abington'},
    {name: 'South Weymouth'},
    {name: 'Braintree'},
    {name: 'JFK/UMass'},
    {name: 'South Station'}
  ],
  'Kingston-Plymouth Line - Outbound': [
    {name: 'South Station'},
    {name: 'JFK/UMass'},
    {name: 'Braintree'},
    {name: 'South Weymouth'},
    {name: 'Abington'},
    {name: 'Whitman'},
    {name: 'Hanson'},
    {name: 'Halifax'},
    {name: 'Plymouth'},
    {name: 'Kingston'}
  ],
  'Newburyport-Rockport Line - Inbound': [
    {name: 'Rockport'},
    {name: 'Gloucester'},
    {name: 'West Gloucester'},
    {name: 'Manchester'},
    {name: 'Beverly Farms'},
    {name: 'Prides Crossing'},
    {name: 'Montserrat'},
    {name: 'Newburyport'},
    {name: 'Rowley'},
    {name: 'Ipswich'},
    {name: 'Hamilton/Wenham'},
    {name: 'North Beverly'},
    {name: 'Beverly'},
    {name: 'Salem'},
    {name: 'Swampscott'},
    {name: 'Lynn'},
    {name: 'River Works'},
    {name: 'Chelsea'},
    {name: 'North Station'}
  ],
  'Newburyport-Rockport Line - Outbound': [
    {name: 'North Station'},
    {name: 'Chelsea'},
    {name: 'River Works'},
    {name: 'Lynn'},
    {name: 'Swampscott'},
    {name: 'Salem'},
    {name: 'Beverly'},
    {name: 'North Beverly'},
    {name: 'Hamilton/Wenham'},
    {name: 'Ipswich'},
    {name: 'Rowley'},
    {name: 'Newburyport'},
    {name: 'Montserrat'},
    {name: 'Prides Crossing'},
    {name: 'Beverly Farms'},
    {name: 'Manchester'},
    {name: 'West Gloucester'},
    {name: 'Gloucester'},
    {name: 'Rockport'}
  ],
  'Providence-Stoughton Line - Inbound': [
    {name: 'Wickford Junction'},
    {name: 'TF Green Airport'},
    {name: 'Providence'},
    {name: 'South Attleboro'},
    {name: 'Attleboro'},
    {name: 'Mansfield'},
    {name: 'Sharon'},
    {name: 'Stoughton'},
    {name: 'Canton Center'},
    {name: 'Route 128'},
    {name: 'Hyde Park'},
    {name: 'Ruggles'},
    {name: 'Back Bay'},
    {name: 'South Station'}
  ],
  'Providence-Stoughton Line - Outbound': [
    {name: 'South Station'},
    {name: 'Back Bay'},
    {name: 'Ruggles'},
    {name: 'Hyde Park'},
    {name: 'Route 128'},
    {name: 'Canton Center'},
    {name: 'Stoughton'},
    {name: 'Sharon'},
    {name: 'Mansfield'},
    {name: 'Attleboro'},
    {name: 'South Attleboro'},
    {name: 'Providence'},
    {name: 'TF Green Airport'},
    {name: 'Wickford Junction'}
  ],
  'Haverhill Line - Inbound': [
    {name: 'Haverhill'},
    {name: 'Bradford'},
    {name: 'Lawrence'},
    {name: 'Andover'},
    {name: 'Ballardvale'},
    {name: 'North Wilmington'},
    {name: 'Wilmington'},
    {name: 'Anderson/Woburn'},
    {name: 'Reading'},
    {name: 'Wakefield'},
    {name: 'Greenwood'},
    {name: 'Melrose Highlands'},
    {name: 'Melrose Cedar Park'},
    {name: 'Wyoming Hill'},
    {name: 'Malden Center'},
    {name: 'North Station'}
  ],
  'Haverhill Line - Outbound': [
    {name: 'North Station'},
    {name: 'Malden Center'},
    {name: 'Wyoming Hill'},
    {name: 'Melrose Cedar Park'},
    {name: 'Melrose Highlands'},
    {name: 'Greenwood'},
    {name: 'Wakefield'},
    {name: 'Reading'},
    {name: 'Anderson/Woburn'},
    {name: 'Wilmington'},
    {name: 'North Wilmington'},
    {name: 'Ballardvale'},
    {name: 'Andover'},
    {name: 'Lawrence'},
    {name: 'Bradford'},
    {name: 'Haverhill'}
  ],
  'SL1 - Inbound': [
    {name: 'Terminal A'},
    {name: 'Terminal B - Stop 1'},
    {name: 'Terminal B - Stop 2'},
    {name: 'Terminal C'},
    {name: 'Terminal E'},
    {name: 'Silver Line Way'},
    {name: 'World Trade Center'},
    {name: 'Court House'},
    {name: 'South Station'}
  ],
  'SL1 - Outbound': [
    {name: 'South Station'},
    {name: 'Court House'},
    {name: 'World Trade Center'},
    {name: 'Silver Line Way'},
    {name: 'Terminal E'},
    {name: 'Terminal C'},
    {name: 'Terminal B - Stop 2'},
    {name: 'Terminal B - Stop 1'},
    {name: 'Terminal A'}
  ],
  'SL2 - Inbound': [
    {name: 'Design Center'},
    {name: 'Northern Ave & Tide St'},
    {name: 'Silver Line Way'},
    {name: 'World Trade Center'},
    {name: 'Court House'},
    {name: 'South Station'}
  ],
  'SL2 - Outbound': [
    {name: 'South Station'},
    {name: 'Court House'},
    {name: 'World Trade Center'},
    {name: 'Silver Line Way'},
    {name: 'Northern Ave & Tide St'},
    {name: 'Design Center'}
  ],
  'SL4 - Inbound': [
    {name: 'Dudley Station'},
    {name: 'Washington St & Melnea Cass Blvd'},
    {name: 'Washington St & Lenox St'},
    {name: 'Washington St & Massachusetts Ave'},
    {name: 'Washington St & Worcester St'},
    {name: 'Washington St & E Newton St'},
    {name: 'Washington St & Union Pk'},
    {name: 'Washington St & E Berkeley St'},
    {name: 'Washington St & Herald St'},
    {name: 'Washington St & Tufts Med Ctr'},
    {name: 'Washington St & Essex St'},
    {name: 'Essex St & Atlantic Ave'}
  ],
  'SL4 - Outbound': [
    {name: 'Essex St & Atlantic Ave'},
    {name: 'Washington St & Tufts Med Ctr'},
    {name: 'Washington St & Herald St'},
    {name: 'Washington St & E Berkeley St'},
    {name: 'Washington St & Union Pk'},
    {name: 'Washington St & E Newton St'},
    {name: 'Washington St & Worcester St'},
    {name: 'Washington St & Massachusetts Ave'},
    {name: 'Washington St & Lenox St'},
    {name: 'Washington St & Melnea Cass Blvd'},
    {name: 'Dudley Station'}
  ],
  'SL5 - Inbound': [
    {name: 'Dudley Station'},
    {name: 'Washington St & Melnea Cass Blvd'},
    {name: 'Washington St & Lenox St'},
    {name: 'Washington St & Massachusetts Ave'},
    {name: 'Washington St & Worcester St'},
    {name: 'Washington St & E Newton St'},
    {name: 'Washington St & Union Pk'},
    {name: 'Washington St & E Berkeley St'},
    {name: 'Washington St & Herald St'},
    {name: 'Washington St & Tufts Med Ctr'},
    {name: 'Washington St & Essex St'},
    {name: 'Temple Pl & Washington St'}
  ],
  'SL5 - Outbound': [
    {name: 'Temple Pl & Washington St'},
    {name: 'Tremont St Opp Avery St'},
    {name: 'Washington St & Tufts Med Ctr'},
    {name: 'Washington St & Herald St'},
    {name: 'Washington St & E Berkeley St'},
    {name: 'Washington St & Union Pk'},
    {name: 'Washington St & E Newton St'},
    {name: 'Washington St & Worcester St'},
    {name: 'Washington St & Massachusetts Ave'},
    {name: 'Washington St & Lenox St'},
    {name: 'Washington St & Melnea Cass Blvd'},
    {name: 'Dudley Station'}
  ]
};

