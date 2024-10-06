<h2>💼 Subscription Plans</h2>

<p>O-Talk offers flexible subscription plans tailored to fit the needs of different users, whether you're just getting started or managing large-scale customer interactions. Choose the plan that works best for you:</p>

<h3>1. Basic Plan</h3>
<ul>
    <li><strong>Price:</strong> $9.99/month</li>
    <li><strong>Features:</strong>
        <ul>
            <li>Up to 1,000 conversations per month</li>
            <li>Customizable theme color</li>
            <li>Basic support</li>
        </ul>
    </li>
</ul>

<h3>2. Pro Plan</h3>
<ul>
    <li><strong>Price:</strong> $29.99/month</li>
    <li><strong>Features:</strong>
        <ul>
            <li>Up to 10,000 conversations per month</li>
            <li>Full chatbot customization (theme, language, positioning)</li>
            <li>Integration with CRM and analytics tools</li>
            <li>Priority email support</li>
        </ul>
    </li>
</ul>

<h3>3. Enterprise Plan</h3>
<ul>
    <li><strong>Price:</strong> Custom pricing (contact us)</li>
    <li><strong>Features:</strong>
        <ul>
            <li>Unlimited conversations</li>
            <li>Dedicated account manager</li>
            <li>Custom feature development</li>
            <li>Integration with advanced tools (AI, multi-language support)</li>
            <li>24/7 premium support</li>
        </ul>
    </li>
</ul>

<p><strong>Note:</strong> All plans come with a 14-day free trial, so you can test out O-Talk before committing to a subscription!</p>

<hr>
Once you got your subscription then...

<h2>🚀 Start Chatting</h2>

<p>This is the example procedure of attaching our chatbot on your page.</p>

<h3>1. Include O-Talk Script</h3>

<p>Add the following snippet to your website's <code>&lt;head&gt;</code> or just before the closing <code>&lt;/body&gt;</code> tag:</p>

<pre>
<code>&lt;script src="https://o-talk.com/chatbot.js" DATA_USER_ID='your_unique_id'&gt;&lt;/script&gt;</code>
</pre>

<h3>2. Initialize the Chatbot</h3>

<p>To initialize the chatbot, simply include the following code after the script:</p>

<pre>
<code>&lt;script&gt;
  OTalk.init({
    botId: 'YOUR_BOT_ID',
    themeColor: '#ff6347', // Customize with your preferred color
    position: 'bottom-right', // Options: 'bottom-right', 'bottom-left', etc.
    welcomeMessage: 'Hi! How can I help you today?',
  });
&lt;/script&gt;
</code>
</pre>

<h3>3. Customize the Chatbot (Optional)</h3>

<p>You can further customize the chatbot's behavior and appearance:</p>

<pre>
<code>OTalk.init({
  botId: 'YOUR_BOT_ID',
  themeColor: '#123456', // Match your brand colors
  position: 'bottom-right', 
  welcomeMessage: 'Hello! How can we assist you?',
  language: 'en', // Supports 'en', 'es', 'fr', etc.
  autoOpen: false, // Set to true if you want the chat to open automatically on page load
});
</code>
</pre>
