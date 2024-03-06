
# What are we eating tonight?

One of my biggest recurring problems in life is that I each day must figure out what I am going to cook for dinner. This website solves that problem.

In a easy way the visitor can instantly get either top inspiration to all kinds of delicious dishes from all around the world *or* get their hands on some super easy and quick recipes.


image of the finished site on all devices, use https://ui.dev/amiresponsive

Find the site [here](https://mikael-johnsson.github.io/what-are-we-eating/)

## Contents

- [User Experience](#user-experience)
  - [User Stories](#user-stories)
- [Design](#design)
  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
  - [Wireframes](wireframes)
- [Features](#features)
  - [General Features on Each page](#general-features-on-each-page)
  - [Future Implementations](#future-implementations)
  - [Accessibility](#accessibility)
- [Technologies Used](#technologies-used)
  - [Languages Used](#languages-used)
  - [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
- [Deployment & Local Development](#deployment--local-development)
  - [Deployment](#deployment)
  - [Local Development](#local-development)
    - [How to Fork](#how-to-fork) 
    - [How to Clone](#how-to-clone)
- [Testing](#testing)
- [Credits](#credits)
  - [Code Used](#code-used)
  - [Content](#content)
  - [Media](#media)
  - [Acknowledgments](#acknowledgments)

## User Experience
When you are hangry and desperate for some inspiration, a time consuming website should not be your next problem. This site is designed to be quick to use.

### User Stories
First time visitors should instantly get an overview of the site and get to know that this is a site that offers both inspiration and easy recipes.

Recurring visitors that know what they are looking for should be able to quickly get to the preferred page.

## Design
### Colour Scheme
![Image of the colour palette used](assets/images/readme-images/color-palette.png)

Red and yellow are known for triggering apetite. Remaining colours are preferred contrasting colours according to coolors.co from which the pallette is taken.

The plum color is used for text and borders. Remaining colours are background colours: red for header and footer, yellow for landing page, teal for inspiration page and lavender for recipe page.
### Typography
The site uses two fonts: "Poppins" for general text and "Madimi One" for headings. 

![Image of the font used in headings, Madimi One](assets/images/readme-images/font-headings.png)


"Madimi One" is a fun, almost brush like font. It is a quite bold font, used in uppercase to make it stand out.


![Image of the font used in general text, Poppins](assets/images/readme-images/font-general-text.png)


"Poppins" is a sans serif-font, easier to read.
### Imagery
Images to recipes and inspiration dishes are taken from above inside a round container (made round to resemble a plate). Food pictures taken from straight above is a common practice by food influencers and gives the visitor a consequent design.
### Wireframes 
These were the original ideas for the three different sections:

![Image of the wireframe for the landing page](assets/images/readme-images/LANDING-PAGE.png)
![Image of the wireframe for the inpiration page](assets/images/readme-images/INSPO.png)
![Image of the wireframe for the recipe page and footer](assets/images/readme-images/RECIPES.png)

It is easy to see where the initial design idea differs from the result. The content in the Inspo page used the space to inefficiently and a simpler design were chosen instead.

The contact feature in the footer was deleted due to not contributing to the user in this particular site.
## Features
This site contain three different sections in a single html-page:
- Landing page
- Inspo page
- Recipe page
### General Features on each page
**The Landing page** gives the visitor a short summary of what the page does and a navigation bar to easily get to the most important content.

**The Inspo page** gives the visitor inspiring pictures with the names of the dishes, categorized under cuisine.

**The Recipe page** gives the visitor quick and easy recipes with 3-5 ingredients that takes only a few miuntes to assemble. The recipe also have a feature where the visitor can sign up for the newsletter, for even more inspiration and recipes. The newsletter sign up-feature is located at the top of the recipe page. When using desktop it sticks to the top of the page when scrolling down. When using smaller screens it is revealed when clicking the newsletter-label.

**The header** sticks at the top of the viewport and gives the visitor access to the navigation bar anywhere on the site. When using a tablet or smaller, the menu bar hides behind a menu icon.

**The footer** is found at the bottom of the site. In the footer the visitor can find links to the social media pages.

The site is responsive - the design changes to be more compatible depending on which screen size the visitor uses.
### Future Implementations
The site has an infinite number of possibilites to incorporate. Some features that are planned but not yet executed are:
- The possibility for the visitor to enter preferred dishes and/or cuisines and get suggestions based on those preferences. 
- The possibility for the site to make suggestions based on what vegetables and fruits are in season in the visitors country at the moment. For a cheaper and more environment-friendly dish.
- The possibility for the site to gather information about prices at shops local to the visitor. For a cheaper dish.
- The possibility for the visitor to log what dishes and/or cuisines the visitor have eaten in the recent days/weeks and get suggestions based on those logs. For a more diverse eating experience.

### Accessibility
The site is made to be accessible. Measures taken are:
- High colour contrast between backround and text
- Alt attributes on all images
- Aria labels on all icons

## Technologies Used

### Languages Used
HTML and CSS were used to create this website.
### Frameworks, Libraries & Programs Used
Google Fonts -  For fonts

Git - For version control

Github - To save & store files and deployment

Font Awesome - For icons used in header and footer

Balsamiq - For wireframes
## Deployment & Local Development

### Deployment
Github pages is used to deploy this site. To deploy the site yourself, follow these instructions:

- Sign in to Github
- Go to the repository for this project called [*what-are-we-eating*](https://github.com/mikael-johnsson/what-are-we-eating)
- Click *settings*
- In the column to the left, click *pages*
- From the dropwdown, select *main branch* and then save
- The site is now deployed!
### Local Development

#### How to Fork
To fork the repository:

- Log in to Github


- Go to the repository for this project called *what-are-we-eating*

- Click the Fork button in the top right corner
#### How to Clone
- Log in (or sign up) to GitHub.

- Go to the repository for this project, *what-are-we-eating*.

- Click *Code* and choose whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link.

- Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.

- Type the following command in the terminal (after the git clone you will need to paste the link you copied in step 3 above):

      git clone { & THE LINK FROM STEP 3 }


## Testing
### Automated testing
#### W3C
I have used W3C validator to validate my HTML code and CSS code. I validated them via direct input.

Both passed without errors. The warning in the CSS validation was regarding imported imported stylesheets - in this case the Google Fonts stylesheet.

![Screenshot of the W3C website after it validated this sites HTML code](assets/images/readme-images/w3c-html-validation-checked.png)


![Screenshot of the W3C website after it validated this sites CSS code](assets/images/readme-images/w3c-css-validation-checked.png)
#### Lighthouse
Lighthouse is a tool created by Google to test a websites: Performance, Accessibility, Best Practices, SEO and Qualification as a Progressive Web Application.

It is used to give an scores on the usability of the site. The test is done for a desktop version and a mobile version.

The score for a mobile device:
![Screenshot of the Lighthouse score for a mobile device](assets/images/readme-images/lighthouse-mobile-first-test.png)


The score for a desktop device:
![Screenshot of the Lighthouse score for a mobile device](assets/images/readme-images/lighthouse-desktop-first-test.png)

Overall the scores are good. For a mobile device, the performance is lacking a bit. This is mostly due to some images being larger than they need to be for a mobile screen.

#### WAVE
Wave is another tool to test the accessibility of the site. This is the result after the first test:

![Screenshot of WAVE score result after first test](assets/images/readme-images/wave-first-test.png)

The error was that the label element in the navbar did not av any text content (only the menu icon). An Aria label was later added and the error removed.

### Manual Testing
#### Features
Below is a table with the sites features, how it has been tested and what the outcome were.

|Feature|Test case|Outcome|
|---|---|---|
|Header |Scroll down through site |Sticks to top of viewport |
|Nav bar - Home |Click |Redirected to landing page |
|Nav bar - Inspo |Click |Redirected to Inspiration page |
|Nav bar - Recipes |Click |Redirected to Recipe page |
|Nav bar - Icon (tablets and smaller) |Click |Menu shows |
|Landing page | | |
|Inspiration page | | |
|Recipe page | | |
|Newsletter form - hidden |Click |Newsletter form shows |
|Newsletter form|Give the required information|Form is successfully sent|
|Newsletter form (desktop)|Scroll down through site|The newsletter form sticks to top of viewport (under the header) inside Recipe page|
|Newsletter form - submit button|Click|Submits form|
|Newsletter form - reseet button|Click|Resets form|
|Social media link - Instagram |Click |Redirected to Instagram |
|Social media link - Youtube |Click |Redirected to Youtube |
|Social media link - Facebook |Click |Redirected to Facebook |
|Footer| | | |
### BUGS

## Credits

### Code Used
The following code from Code Institutes *Love Running* project were used and adapted to create the menu bar on smaller devices:

#nav-toggle:checked~nav {
    display: block;
}

#nav-toggle {
    display: none;
}

.nav-toggle-label {
    font-size: 2rem;
}

### Content    
Recipes are taken from swedish recipe site https://www.köket.se

Remaining content is written by myself.
### Media
All images are licensed to use in commercial products. 
Images were taken from:

https://www.pexels.com
### Acknowledgments
Huge thank you to my Code institute mentor Graeme Taylor for offering excellent insights in good coding praxis.

Thank you to Kera Cudmore for creating the template and standard info used in this Readme.



