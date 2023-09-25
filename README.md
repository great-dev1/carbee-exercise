# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Project Reflection
## 1. Did you run into any “gotchas” along the way? If so, what were they and how did you address them?
This is a very simple project with only basic features like Authentication, Protected Routes, API integration, etc in Next.js, and I didn't encounter any special "gotchas" along the way :)
## 2. How did you handle forms? In a largely form-driven project, would you do anything differently? If so, what?
There is no much form components needed in this project, and I just used basic form controllers for the implementation.
But in a largely form-driven project, I would like to use formik as it takes care of the repetitive and annoying stuff like keeping track of values/errors/visited fields, orchestrating validation, and handling submission. 
## 3. How did you handle authorization? In your ideal FE/BE scenario, what auth strategy would you use?
In this project, I used JWT strategy(The user signs in -> On the backend, it authenticates the user and generates & returns the token -> On the frontend, it stores the token in localStorage -> Whenever the user sends requests to the backend, the request has the token in its header -> On the backend, it authorizes the user with the token in the request header).
In my ideal FE/BE scenario, I would also use JWT strategy because it has several advantages like the backend does not need to maintain any session state, it is secure and also lightweight.
## 4. Is there anything you’d like to share about your project prior to my evaluating it?
The requirements and implementation was so clear and smooth, and I have nothing special to share here.
## 5. How long did you spend on this exercise? If you had unlimited more time to spend on this, how would you spend it and how would you prioritize each item?
I spent 2-3 hours on this exercise as the requirements only include basic features.
In case the deadline is unlimited, then I will spend more time on test coverage, performance testing, and documentation.
