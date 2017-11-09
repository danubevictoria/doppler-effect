# Doppler Effect
The velocity of stars are determined by using the doppler effect. This is a simulation to demonstrate the Doppler Effect. The motion of a star causes a shift in the wavelengths received. If the star is moving away from you, then you see the wavelengths stretched out. The spectral lines appear shifted to the red end of the spectrum, so the shift is called a redshift. If the star is moving toward you, then the wavelengths appear to the compressed. The spectral lines are shifted to the blue end of the spectrum, so the shift is called a blueshift. The doppler effect tells you only about the motion relative to you. If you move toward the star or it moves toward you, the doppler effect will be the same. 

http://www.astronomynotes.com/starprop/s8.htm

This simulation was built using HTML/CSS and JavaScript with frameworks like Bootstrap, AngularJS, and jQuery.

To run the simulation, 
- Open index.html
- You can change the velocity of the star by moving the slider or by entering in a value between -100 and 100, inclusive, in the box.
- You should see the star's color change to red as the star moves away from you, change to blue as the star moves toward you, change back to neutral when the star is not moving (i.e. velocity is 0).

Known issues:
- Entering a value out of range and clicking [Enter] will prevent changing the velocity to an out of range value but if you click out of focus of the input, the slider displays NaN but the value is actually defaulted back to 0 and the star's color defaulted back to neutral.
- The velocity slider is not logarithmic.
