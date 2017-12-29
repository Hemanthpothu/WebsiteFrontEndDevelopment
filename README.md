# Introduction

The website that i'm going to create will be a phone site that involves the selling of phones and other related items such as
sim cards, news about the latest technology etc. There will be a variery of options for the users to choose from however as this is just an initial prototype
there will be restricitons set.

# Motivation

The motivation behind creating the website was the fact that in this day and age literally everyone of all ages ranging
from school kids to older aged people tend to have a mobile phone. As there is alot of competion ith phone shops and network providers
i thought why not sell the same deals at the slightly better price which would therefore mean that people
would rather choose coming to my site and puchasing the products rather than my competitors.



# Designs - Wireframes

This image is of the initial wireframe I sketched out, These were my ideas on paper with a pencil at first which i believed how i wanted my website to be on the different media queries. This was before i started creating my website

![initial wireframe](https://user-images.githubusercontent.com/16776625/34448876-e92767d6-ece9-11e7-9e59-5371190a3514.jpg)

However as i started creating my website, many things changed and my ideas evolved. Also with the help of the testing i was able to come up with the final wireframe which enabled me to improve my website vastly.

![final wireframe](https://user-images.githubusercontent.com/16776625/34448875-e901eb64-ece9-11e7-97a3-72159f9deb45.jpg)


# Designs Features

Multiple Page Site - The site is made up of multiple pages which means that the the site takes the user to a series of pages when they click on differnt links to browse.

The Navigation bar - The navigation on the site is positioned at the top which is consistent through out. When the user views the site on the desktop version, the navigation bar is in, inline block across, however when the user views the site in the mobile and tablet version, there is a Hamburger menu, bascially it's an image where the user will need to click in enable for the navigation links to show. The change in menu is done through using Javascript

Other Navigation - (Site Map) - There is also a site map at the bottom of all pages so the user may get around the site with ease.

Social media icons - These icons are within the footer at the bottom of the site on all the pages. When the user hovers over these items, an effect is generated to show what icon is being hovered over

Language translator - This enables the users to change the language on the page to their preferred language

Wiki API - This enables the users to search for phones on the site which brings back results from wikipedia

Google Maps API - This enables the user to know where the location of my phone shop is

# Issues

* (SOLVED)
One of the main issues i was facing was having multiple javascripts in one file. This meant that because i had a feature on the index page where the user could input their name as a welcome message,  the javascript was trying to find that function/ feature on all the other pages too which i had not inserted that feature on. To get past this Javascript error. i included an 'if' statement to by pass this error

![javascripterror](https://user-images.githubusercontent.com/16776625/34449636-3a327fd2-ecf2-11e7-87d4-60f5887ef019.png)

* (SOLVED)
Also another issue i was having was with the slideshow. This is because the code online has onlick which i was not allowed to use, However i adapted the code from online from W3 schools and inserted 'Add Event Listeners' which enabled me to make the slideshow javascript to work.

![eventlistener](https://user-images.githubusercontent.com/16776625/34449442-19ccfecc-ecf0-11e7-8854-a2c7a80d396c.JPG)

Another issue i seem to have which i could not resolve was for the background animation which i adapted from the Front end web development lab. I have key frame errors and no matter wha ti did i just could not get rid of them

![csserror](https://user-images.githubusercontent.com/16776625/34449486-90f7f786-ecf0-11e7-9914-dd332852eb7f.JPG)


# Testing

I had 5 user testing my website to see it met the standard of usability and if it was easy to navigate around. There were several questions in the test which the users had to go through and answer and they was able to leave any positive or critical feedback of my website.

![user2](https://user-images.githubusercontent.com/16776625/34448895-16016f54-ecea-11e7-82dd-9f2aa74544c8.jpg)

![user3](https://user-images.githubusercontent.com/16776625/34448896-16273036-ecea-11e7-9028-b98a8e254cbd.jpg)

![user4](https://user-images.githubusercontent.com/16776625/34448897-1649e4aa-ecea-11e7-984a-c439f8f0dc9d.jpg)

![user5](https://user-images.githubusercontent.com/16776625/34448898-166e8e2c-ecea-11e7-87b5-8f23934a40f3.jpg)

![user1](https://user-images.githubusercontent.com/16776625/34448899-16948a0a-ecea-11e7-8fa0-dab70018a04d.jpg)



# Improvements made from testing results

I got a good feedback from the testers which enabled me to change a few things on my website. One of the user suggested i could add in a language translator feature which i did which enabled users to read my website to their preffered language

![translator](https://user-images.githubusercontent.com/16776625/34448998-686e8aa0-eceb-11e7-8824-5eeaff28a36d.JPG)

Another user also suggested i should have an arrow at the bottom of the page where it would enable the user to go back to the top of the page which was a very good suggestion so i made changes and included that too

![arrow](https://user-images.githubusercontent.com/16776625/34448999-68a60548-eceb-11e7-839a-977587f0a1cf.JPG)


# PARC Design

I have used the four principles that the visual design of a website should include:

* Proximity:  I have grouped related items close together. This provides the viewer with a visual cue that this items are similar and should be treated as a group.
* Alignment: Every visual element on my website should has some kind of connection to at least one other element. Nothing ispositioned haphazardly.
* Repetition: All the common elements, such as colors, graphics, layout styles are  repeated to give a consistent look and feel to the pagees on my website.
* Contrast: The idea of contrast is to make dis-similar elements on my website very different. I believe contrast is one of the most powerful visual design tool which theorfore i used Black and red to get the users eye

# Site Map

This is the sitemap of my website to allow the user to know how to navigate around

<img width="170" alt="sitemap" src="https://user-images.githubusercontent.com/16776625/34449579-81f8a4a0-ecf1-11e7-904a-79e4081e336c.png">


# References

* Google translator
https://stackoverflow.com/questions/12243818/adding-google-translate-to-a-web-site

* The slideshow (I adapted the code and made my own changes in the javascript file)
https://www.w3schools.com/w3css/w3css_slideshow.asp

* Google API
tps://developers.google.com/maps/documentation/javascript/

* Font Family
https://www.w3schools.com/cssref/pr_font_font-family.asp

* Wiki API - DMU - Front End Web Development Labs

* Mobile First Responsiveness - DMU - Front End Web Development Labs

* Smooth scroll - DMU - Front End Web Development Labs 








