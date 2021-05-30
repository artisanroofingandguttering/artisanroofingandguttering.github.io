# notes

Currently there are two websites presented at https://artisanroofingandguttering.gitlab.io.

+ https://artisanroofingandguttering.gitlab.io/ - The main hugo site.
+ https://artisanroofingandguttering.gitlab.io/bootstrap/ - The new bootstrap site.

## hosting

Hosting for http://artisanroofingandguttering.com is currently done via AWS S3 Public Bucket. To continue hosting like this would require a higher investment and more work to host the site via TLS, as it should be. Notice, right now your website is "http" not "https"; that is no good these days.

The new hosting is done for free via [Gitlab Pages](https://docs.gitlab.com/ee/user/project/pages/). That includes free TLS certificates.

_note: This site address will be correct when you give the command to launch. The address is currently wonky while we get everything squared away, but in the end it will be as one would expect._

Here is how the url's are laid out:

+ old
    - http://artisanguttering.com redirects to http://artisanroofingandguttering.com
    - http://www.artisanguttering.com redirects to http://artisanroofingandguttering.com
    - http://www.artisanroofingandguttering.com redirects to http://artisanroofingandguttering.com
    - http://artisanroofingandguttering.com resolves and responds with the website
+ new
    - http://artisanguttering.com redirects to https://www.artisanroofingandguttering.com
    - https://artisanguttering.com redirects to https://www.artisanroofingandguttering.com
    - http://www.artisanguttering.com redirects to https://www.artisanroofingandguttering.com
    - https://www.artisanguttering.com redirects to https://www.artisanroofingandguttering.com
    - http://artisanroofingandguttering.com redirects to https://www.artisanroofingandguttering.com
    - https://artisanroofingandguttering.com redirects to https://www.artisanroofingandguttering.com
    - http://www.artisanroofingandguttering.com redirects to https://www.artisanroofingandguttering.com
    - https://www.artisanroofingandguttering.com resolves and responds with the website

That means, in the new hosting environment, no matter which url is used, the user ends up at the secure version of the website including TLS and the canonical www subdomain.

So the new hosting mechanism has many improvements:

+ easy peasy
+ cheaper
+ no infrastructure maintenance
+ TLS is automatic without CloudFront distribution
+ easier to update and collaborate on

Best part is that these perks are in place no matter which route you go.

## sites

### hugo site

This is the website that is currently in-place, but slightly updated to be more maintainable.

+ developed with [Hugo](https://gohugo.io)
+ custom theme I created using [Material Design Lite](https://getmdl.io)
+ very high accessibility score
+ works great on desktop and mobile

### bootstrap site

Site developed by Chris, with some updates from me. Here is a list of the updates I made to that site to make it ready for deployment.

Here is an abbreviated list of modification I made to the provided files prior to pushing.

+ Replaced all "fevicon" with "favicon".
+ Used favicon from hugo site (higher quality with alpha layer).
+ Removed most non-semantic formatting from reviews section to deal with overflow and typeface issues.
    - This was overrunning the screen on mobile and some of the links were wonky.
+ Corrected some spelling.
+ Modified all files with CRLF (Windows) endings to LF (Unix) endings.
    - This is the standard and anybody working on code in Windows should configure LF endings.
    - Repository provides [EditorConfig](https://editorconfig.org).
+ Reformatted many files for legibility.
+ Modified the DOM structure for all html files; non passed validation.
+ Removed many instances of `&nbsp;` used for formatting.
+ Corrected that formatting with css.

## decision

Ultimately, the decision is yours. It is important that your brand is recognized exactly how you want. I think there are benefits to each path, but I want to make one thing very clear... I have no problem working with anybody you throw at this, as long as they are cool about teamwork. Both sites are well done along a few axes, and you have my support in any event.

## what's left

1. Decide which site is the closest visual appeal to what you want.
2. Decide if accessibility is important to you; meaning for disabled participants.
3. Deploy new DNS records.
4. Continue development as requested.

## collaboration

+ [Create a GitLab.com account](https://gitlab.com/users/sign_up)
+ Fork this repository.
+ Update either site.
+ Run `hugo server` to ensure everything looks okay.
+ Open a pull request.
+ Once merged the updated site will automatically build and deploy.
