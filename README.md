<h2>💼 Subscription Plans</h2>
<p>
  O-Talk is planning to introduce a range of flexible subscription plans
  designed to cater to various user needs, from individual users to larger teams
  managing customer interactions. These plans are expected to provide options
  for different usage levels, customization possibilities, and varying levels of
  support.
</p>

<h3>1. Basic Plan</h3>
<ul>
  <li><strong>Price:</strong> To be announced</li>
  <li>
    <strong>Details:</strong> This entry-level plan is intended to cover
    essential requirements, ideal for those starting out or handling low-volume
    interactions.
  </li>
</ul>

<h3>2. Pro Plan</h3>
<ul>
  <li><strong>Price:</strong> To be announced</li>
  <li>
    <strong>Details:</strong> The Pro Plan is expected to offer advanced
    features and more flexibility, potentially including higher interaction
    limits and enhanced customization options.
  </li>
</ul>

<h3>3. Enterprise Plan</h3>
<ul>
  <li><strong>Price:</strong> Custom pricing (to be determined)</li>
  <li>
    <strong>Details:</strong> Tailored for large-scale operations, the
    Enterprise Plan aims to deliver comprehensive solutions with dedicated
    support and potential for bespoke feature development.
  </li>
</ul>

<p>
  <strong>Note:</strong> These plans are currently under development, and more
  details will be shared once they become available.
</p>

<hr />

<h2>🚀 Start Chatting</h2>
<p>
  The process for integrating our chatbot on your page is currently being
  structured. Here’s a preview of the expected steps:
</p>

<h3>1. Include O-Talk Script</h3>
<p>
  The setup will likely involve adding a script snippet to your website's
  <code>&lt;head&gt;</code> or just before the closing
  <code>&lt;/body&gt;</code> tag:
</p>
<pre><code>&lt;script src="https://o-talk.com/chatbot.js" DATA_USER_ID='your_unique_id'&gt;&lt;/script&gt;</code></pre>

<h3>2. Initialize the Chatbot</h3>
<p>
  To activate the chatbot, the initialization step will require a script similar
  to:
</p>
<pre><code>&lt;script&gt;
      OTalk.init({
        botId: 'YOUR_BOT_ID',
        themeColor: '#ff6347', // Customize with your preferred color
        position: 'bottom-right', // Options: 'bottom-right', 'bottom-left', etc.
        welcomeMessage: 'Hi! How can I help you today?',
      });
    &lt;/script&gt;
    </code></pre>

<h3>3. Customize the Chatbot (Optional)</h3>
<p>
  We are also considering offering customization options, allowing you to
  personalize the chatbot’s appearance and behavior:
</p>
<pre><code>OTalk.init({
      botId: 'YOUR_BOT_ID',
      themeColor: '#123456', // Match your brand colors
      position: 'bottom-right', 
      welcomeMessage: 'Hello! How can we assist you?',
      language: 'en', // Potentially supporting 'en', 'es', 'fr', etc.
      autoOpen: false, // You may have the option to auto-open the chat on page load
    });
    </code></pre>

<p>
  These steps and configurations are still being planned, and detailed
  instructions will be provided once everything is finalized.
</p>
