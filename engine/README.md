The core processing uses `cython` and `python >= 3.x` as programming tools.

Operation:
  - Input solitary image
  - Cropping and Aligning the image
  - Output detected image or predictions

The computation is stripped down to further steps:
  - Face Detection: Although recommended to provide mugshot, if not detect facial feature.
  - Data Extractation: Training Model of provided face.
  - Comparing/Process Data from Database on trained Deep Learining model, constructing the 128-d embedding (quantification).

**Build-in OpenCV tools**: This approach will not be used but still documented for refrence purpose.
  - Database: Preliminary testing of face recognition algorithm is done using the *AT&T Facedatabase* [via](http://face-rec.org/databases/)

**Custom Deep Metric Learning**: This approach will be the real process behing facial recognition.


