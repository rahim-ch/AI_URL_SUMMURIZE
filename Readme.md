---
![Screenshot 2023-05-21 073607](https://github.com/rahim-ch/AI_URL_SUMMURIZE/assets/116936569/6b3e1a65-d4e0-4b87-86d8-e68ca08e65d7)

---

<pre><code># Website Description App

This is a React.js web application that takes a website URL as input from the user and uses AI-powered Article Extractor and Summarizer API to generate a description about the website.

The app is built using the following technologies:
- React.js (vite)
- Tailwind CSS
- Redux Toolkit
- Article Extractor and Summarizer API from RapidAPI

## Demo

You can try the live demo of the app at: [Website Description App Demo](https://taupe-naiad-5edf7d.netlify.app/)

## Installation

To run the app locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/website-description-app.git
</code></pre>
<ol start="2">
<li>Navigate to the project directory:</li>
</ol>
<pre class=" language-bash"><code class="prism  language-bash"><span class="token function">cd</span> website-description-app
</code></pre>
<ol start="3">
<li>Install the dependencies:</li>
</ol>
<pre class=" language-bash"><code class="prism  language-bash"><span class="token function">npm</span> <span class="token function">install</span>
</code></pre>
<ol start="4">
<li>
<p>Set up RapidAPI credentials:</p>
<ul>
<li>Visit <a href="https://rapidapi.com/">RapidAPI</a> and create an account (if you haven’t already).</li>
<li>Get the API key for the Article Extractor and Summarizer API.</li>
<li>Copy the API key.</li>
</ul>
</li>
<li>
<p>Create a <code>.env</code> file in the root directory of the project and add the following line:</p>
</li>
</ol>
<pre><code>VITE_RAPIDAPI_API_KEY=YOUR_API_KEY_HERE
</code></pre>
<p>Replace <code>YOUR_API_KEY_HERE</code> with your actual RapidAPI API key.</p>
<ol start="6">
<li>Start the development server:</li>
</ol>
<pre class=" language-bash"><code class="prism  language-bash"><span class="token function">npm</span> run dev
</code></pre>
<ol start="7">
<li>Open your browser and visit <code>http://localhost:3000</code> to see the app running.</li>
</ol>
<h2 id="usage">Usage</h2>
<ol>
<li>Enter a website URL in the input field on the home page.</li>
<li>Click the “Generate Description” button.</li>
<li>The app will call the Article Extractor and Summarizer API with the provided URL and display the description of the website.</li>
<li>Explore the app and generate descriptions for different websites.</li>
</ol>
<h2 id="contributing">Contributing</h2>
<p>Contributions are welcome! If you have any ideas, improvements, or bug fixes, please open an issue or submit a pull request.</p>
<h2 id="license">License</h2>
<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>
<pre><code>
You can copy the above content and save it in a `README.md` file in the root directory of your project. Remember to replace the demo link and RapidAPI information with your own.

Feel free to customize the README file further to add more specific instructions, documentation, or additional sections as needed for your project.
</code></pre>



