# Simple Model

## Scope

This is intended to be a simple web climate model for education purposes. It can illustrate some of the basic concepts in climate change. The model is based off of an Excel model created by Dr. LuAnne Thompson at the University of Washington. 

## Technical Details

The model runs off of javascript and uses a number of external libraries, including: 
* [jQuery UI v 1.12.1](https://jqueryui.com/) for the slider bar
* [Bootstrap Switch v3.3.2](http://www.bootstrap-switch.org) for toggle switches
* [jQuery v 3.1.1](https://jquery.com/) to tie it all together
* [plotly](https://plot.ly/javascript/) for plotting

## Science Details

The model is a prognostic model, meaning that given the current conditions, it will be able to make a prediction for a later time. In this case, we take the temperature and radiative forcing at some time, t, and make a prediction of the future temperature (at time t + 1). 

The model represents climate change using a few terms. The radiative forcing is the enhanced downwelling longwave radiation that results from increased greenhouse gases. There is also a climate feedback -- as the Earth warms it is able to emit more energy to space. Last, the response time depends on the ocean's capacity to absorb energy coming into the planet. An ocean with a deep mixed layer can effectively mix excess energy into the ocean, decreasing the temperature change because the ocean has a large heat capacity. At the other extreme, if there was no ocean, the surface temperature would respond really quickly, because the atmosphere has a very low heat capacity. 

Our model then includes all of these terms:

	dT = ((T * dR/dT + F) * dt) / C

where
* dT is the change in temperature (K)
* T is the current temperature anomaly (K)
* dR/dT is the radiative feedback (W/m^-2 per K)
* F is the radiative forcing (W/m^-2)
* dt is the change in time (s)
* C is the specific heat capacity (K per J/m^-2)

The C term is the a function of the depth of the mixed layer (H [m]), the density of water (rho = 1025 kg/m^3), and the specific heat capacity per mass (cp = 3985 J per K*kg).

	C = (H * rho * cp) [K/(J/m^2)]

We use a timestep of one year, which in seconds is:
	60 s/min * 60 min./hr * 24 hr/day * 365 day/year = 31363200s

### Intuition

This seems complicated, even for a simple model, but it isn't. Let's break it down. 

The first term **(T * dR/dT + F)** tells us how fast energy is moving into and out of the Earth system. dR/dT is negative and represents the outgoing longwave energy as the Earth heats up. F is the extra longwave energy moving into the Earth that results from increased greenhouse gas emissions. This whole term is the rate of change of energy (J/s) - to get the accumulated energy, we multiply by time: **((T * dR/dT + F) * dt)**. Now we have the total energy accumulated by the system. We multiply this by the specific heat capacity in order to convert this energy into a temperature change, dT. Since this is a forward model, we now can calculate the temperature one year from now: 

	T(i + 1) = T(i) + dT

where 

	T(i + 1) = ((T(i) * dR/dT + F(i)) * dt) / (H * rho * cp)

Here, we start with a temperature anomaly of 0. We tell the model the forcing, F, at any given time. You can tell the model which forcings to include -- of volcanos, solar changes, and anthropogenic changes due to emissions of aerosols and greenhouse gases. We specify dR/dT, which is the climate feedback. We know that the Earth will emit more longwave radiation for every 1 K increase in temperature (about -3.2 W/m^2 per K), so this term is negative (to represent energy moving out of the Earth system). But changes to clouds, sea ice, and water vapor can also modify this feedback, so the user will have to specify this value. Furthermore, we don't know exactly how well heat is mixed into the ocean -- so the mixed layer depth, H, needs to be specified. A large H implies that heat is very effectively mixed into the ocean (decreasing the temperature change per forcing) and a smaller H makes the Earth more responsive. Heat is typically mixed over a depth of ~100 m, but the exact value varies over time and throughout the globe. 

## Get this going on your own server/computer

Download the git repository:

	cd ~/Desktop/
	git clone https://github.com/pochedls/Simple-Climate-Model.git simple
	cd simple

Start up a simple python server: 
	python -m http.server 8000

Now just go to your web browser [localhost:8000](localhost:8000)

## To Do:
* Make page look nicer
* Add controller for mixed later depth
* Add future warming scenarios (RCP scenarios)
** Add option to extend historical
* Make natural variability work
** Add multi-decadal variability










