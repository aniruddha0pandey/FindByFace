The core processing uses `cython` and `python >= 3.x`.

The computation is stripped down to further steps:
  - Face Detection: Although recommended to provide mugshot, if not detect facial feature.
  - Data Extractation: Training Model of provided face.
  - Comparing/Process Data from Database on trained Deep Learining model
  
Operation:
  - Input solitary image
  - Output detected image or predictions
