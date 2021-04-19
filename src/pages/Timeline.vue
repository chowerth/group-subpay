<template>
  <q-page padding>
    <div class="q-px-lg q-pb-md">
      <q-timeline color="secondary">
        <q-timeline-entry heading> Group Coordination </q-timeline-entry>

        <q-timeline-entry
          title="Group Subpay Start"
          subtitle="March 21, 2021 Author: Chris"
          icon="announcement"
          color="accent"
        >
          <p>
            I got some info on what the heck group subpays are and had some
            motivation (and time) to do something so I created a
            <a href="https://github.com/chowerth/group-subpay"
              >group subpay repo</a
            >
            for us to use.
            <i
              >If you want access you need be added as a collaborator by
              me--ping me on teams</i
            >. We've all been stuck in mainframe land for a long time so I'm
            sure it'll take time to re-learn modern dev practices. Feel free to
            create any "test" pages you want on this site and add them to the
            sidebar. No need to mess with personal git branches and merging and
            all that stuff.
          </p>
          <p>
            My idea is to build a toy frontend for group subpays using VueJS 3
            and Quasar Framework, hook it up to some toy backend using AWS
            Amplify, and actually host a live site to demo using Amplify hosting
            (AWS Route 53) for the judges. If what I read is correct we can use
            the feature branch protection capability to hide our site behind a
            password we can share with the judges and each other. No need to use
            your NW laptop and bang your head against the wall fighting proxies,
            vpn's, firewalls, and annoyances like that.
          </p>
          <p>
            We'll have all the
            <a href="https://docs.amplify.aws/lib/q/platform/js"
              >fancy bells and whistles using AWS Amplify</a
            >
            including a managed CICD pipeline and access to many of their
            services (hosting, storage, API, Functions, and predictions being
            the main ones I see us using). I looked at Netlify and a couple
            other JAMStack services and decided I rather play with Amplify since
            NW uses AWS anyway.
          </p>
        </q-timeline-entry>

        <q-timeline-entry
          title="Start Group Subpay UI and Forms"
          subtitle="March 24-27, 2021 Author: Chris"
          icon="code"
        >
          <p>
            Started to create a dummy UI with Quasar and VueJS for when we build
            the real UI. Testing out forms, navigation, and setting the
            scaffolding for VeuJS best practices by modularizing components etc.
            Saw the group subpay video Sujatha posted. Got some thoughts which
            I'll list a few:
          </p>
          <ul>
            <li>
              Replicate IADT group subpays in Quasar -- what benefits will we
              get if we make the switch to something modern?
            </li>
            <li>
              Create some dummy pages invoking public apis for testing axios
              calls with dynamic loading spinner -- reuse api service pattern.
              This is going to be tricky for affirmations since this api is not
              CORS enabled and thus my app's api dev calls will fail. See
              possible CORS solutions.
            </li>
            <li>
              Call a PALLM API from the frontend with axios -- we need an
              external API endpoint and I don't know if any PALLM Api's are
              external yet?
            </li>
            <li>
              Thinking about spreadsheet upload for group subpays and having a
              skeletal frame page UI
            </li>
            <li>
              Add amplify hosting to quasar frontend to publish a live site
            </li>
            <li>
              Add s3 storage to persist our frontend data...lots of
              possibilities with this
            </li>
            <li>Test out Admin UI</li>
            <li>
              Add REST Api to our app and consume our group subpay data via
              postman call simulating other services getting our data
            </li>
          </ul>
          <p>
            Possible CORS solutions...<br />
            There are two main solutions: find a public reverse proxy or proxy
            the requests with my own server. The quick workaround I found for
            option one is using
            <a href="https://cors-anywhere.herokuapp.com/corsdemo"
              >this public reverse proxy</a
            >. However, it has limitations you can read for yourself. After a
            lot of research I found out that using webpack I can modify the
            built-in quasar dev server to proxy requests I make to a dummy
            endpoint. It can modify the request and forward it to the real
            target endpoint. This means I can invoke any non-CORS enabled api
            server by invoking a fake endpoint and writing a rule to detect and
            transform it.
            <a
              href="https://forum.quasar-framework.org/topic/6704/enable-cors-to-bypass-to-different-ports-problem-with-api-requests/13"
              >See this thread </a
            >and
            <a
              href="https://webpack.js.org/configuration/dev-server/#devserverproxy"
            >
              this from webpack</a
            >
          </p>
        </q-timeline-entry>

        <q-timeline-entry
          title="Create Timeline Log and API Call Setup with Axios"
          subtitle="March 28-29, 2021 Author: Chris"
          icon="build"
        >
          <p>
            So I got the bright idea to actually put our log and changes here on
            the live site because let's be honest...putting everything in one
            place is way easier to consume and produce than logging onto our NW
            laptops to check teams or sifting through github logs and commits.
            Also, it's kind of motivating to see the progress you've made. If
            you want to add icons to your posts just pick any
            <a href="https://material.io/">material design icon</a>.
          </p>
          <p>
            Set up a mock server using
            <a href="https://my-json-server.typicode.com/">my json server</a>.
            Here is our
            <a href="https://my-json-server.typicode.com/chowerth/group-subpay"
              >group subpay mock api server</a
            >. To modify the data edit <code>db.json</code> file in the root of
            the repo.
          </p>
          <p>Set up a team page with a brief description...</p>
          <p>
            Set up best practices scaffolding for Api services in Vue 3 and
            Quasar. See official
            <a href="https://github.com/axios/axios#example"
              >axios documentation</a
            >
            for examples.
          </p>
          <p>
            Potentially open up
            <a
              href="https://next.quasar.dev/quasar-cli/opening-dev-server-to-public#using-ngrok"
              >dev server for quick collaboration</a
            >?
          </p>
          <p>
            Perhaps switch to
            <a href="https://quasarframework.github.io/quasar-ui-qmarkdown/docs"
              >QMarkdown</a
            >
            for this timeline since typing this HTML is...meh
          </p>
          <p>
            I really want to try GitHubt Actions out...maybe a research topic
            for later
          </p>
        </q-timeline-entry>
        <q-timeline-entry
          title="File picker and spreadsheets"
          subtitle="March 30, 2021 Author: Chris"
          icon="psychology"
          color="negative"
        >
          <p>
            Messed with Qcards and CSS/design a bit. I'm terrible at it but it's
            fun.
          </p>
          <p>
            Struggled reading a file from QFile and displaying it in a
            component. Need to figure out how to use the File API. I think I
            need to use a computed property on the file/filelist to parse
            whenever the reactive object changes.
          </p>
        </q-timeline-entry>
        <q-timeline-entry
          title="Got QFile API Working and Promise Programming"
          subtitle="April 1-2, 2021 Author: Chris"
          icon="build"
          color="positive"
        >
          <p>
            I did some heavy research into async programming with promises and
            figured out how to get the data from the QFile API the cool new
            "modern" way using
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob/text"
              >Blobs</a
            >
            and not the old FileReader way. Originally I thought I'd use a
            computed property from Vue but that won't work since they rely on
            getters and setters that must return a value. In promise based
            programming you can only return a promise back to the caller which
            won't trigger a computed property to give you a "value". After all,
            in the async world, your computed property has no way to know when
            your value will arrive so how can it "return". A great example
            showcasing promises is
            <a
              href="https://plnkr.co/edit/K18o4Lp2jtUincjyG5wi?p=preview&preview"
              >here</a
            >. In the end the code is much simpler and more performant invoking
            the async file api from the update event on the QFile component
            whenever the model (the uploaded file) changes.
          </p>
          <p>
            Need to commit code...but it's 3:30 AM and I'm too tired to polish
            things up. Still need to switch this HTML stuff into Markup with
            QMarkup for better readability. I should put completion statuses on
            the list of goals I documented above. I should also create an
            onCreate lifecycle hook for the affirmation API to pull a random
            affirmation instead of just defaulting the value on page load.
          </p>
        </q-timeline-entry>
        <q-timeline-entry
          title="Lifecycle Hooks and Skeleton Templates"
          subtitle="April 3-4, 2021 Author: Chris"
          icon="build"
        >
          <p>
            Played with lifecycle hooks and api calls. Determined with the
            composition api we can just invoke our data fetching API methods
            directly within the setup() method since it's equivalent to the
            "created" lifecycle hooks. Also experimented with skeleton templates
            waiting on lengthy operations (such as a data fetching API call) to
            display something to the user. Made a custom delayService to test
            out skeletal templates.
          </p>
          <p>
            I tried to get QMarkdown working but the author needs to bump the
            required version of some software up to use it. Basically since I
            wanted to test out bleeding edge Beta it's incompatible. See
            <a
              href="https://discord.com/channels/415874313728688138/551066279943995397/811622420364132352"
              >this discord thread for more</a
            >.
          </p>
          <p>
            Experimented with communication between components. How do you get
            two components to talk to each other? For parents to children you
            use props (simple enough just like function calls). For child to
            parent you should listen for events and use "emit" to emit events
            from the child the parent listens to. For Vue3 you can also use
            provide/inject to allow a parent to communicate with any of its
            children (not just direct descendents). For sibling communication it
            gets trickier. One way is to take both component's services and put
            them in a new component that utilizes the data/methods of each. You
            could also try using dynamic components with ":is" syntax and slots.
          </p>
          <p>
            I created a dummy component I'm testing the different styles out
            in...
          </p>
        </q-timeline-entry>
        <q-timeline-entry
          title="Business Gives  Group Subpay Demo"
          subtitle="April 5, 2021 Author: Chris"
          icon="build"
        >
          <p>
            Kyrstin Budd gave a demo of group subpays. Major paint points so
            far:
          </p>
          <ul>
            <li>On Group subpay screen default out "From Voucher"</li>
            <li>They almost always click "clear amounts"</li>
            <li>
              They manually enter the amounts from the forms they receive for
              each recipient
            </li>
            <li>
              Printer defaults to portrait but you can't view it...needs to
              default to landscape
            </li>
            <li>
              Group subpays are literally scanned and mailed in...so each
              company has their own. QC contract, name, source amounts, total
              amounts, etc.
            </li>
            <li>
              The main problem is there is no web app for group subpays! So
              instead of using single subpays for 20 people they just scan it
              and mail it in! So it seems we need to create a web app to support
              group subpays.
            </li>
            <li>
              Minimum information for subpay processors: Name, SSN, account #,
              employee contribution or match or roth (source of money), amount
              they want (dollar value), special instructions field
            </li>
          </ul>
        </q-timeline-entry>
        <q-timeline-entry
          title="Vue 3 Component Communication Patterns Testing"
          subtitle="April 7-8, 2021 Author: Chris"
          icon="question_answer"
          color="positive"
        >
          <p>
            I need to test out how components can communicate in the Vue 3
            architecture. While this is just a POC I might as well learn the
            correct way to do things. There are two main communication methods.
            The first is parent/child (since the virtual DOM is a tree) and the
            second is global store. For parents communicating with children you
            pass in props to the child like you would pass in parameters to a
            function. For children communicating with parents you emit events
            the parent listens to on the child component and invoke a function
            to handle event data. For sibling communication you can use the
            parent as an intermediary and use child/parent communication or
            global store. For unrelated components you'll have to use a global
            store. You can use Vuex or provide/inject on the root component.
          </p>
          <p>
            I should put reactive class properties for small screens for the
            group subpay screen that switches to vertical stepper if the screen
            is small.
          </p>
          <p>
            I have basic parent -> child and child -> parent communication
            working and service reuse. I need to experiment with global store
            patterns with provide/inject and vuex.
          </p>
        </q-timeline-entry>
        <q-timeline-entry
          title="Adding Amplify and Hosting"
          subtitle="April 9-11, 2021 Author: Chris"
          icon="build"
        >
          <p>
            Add amplify to the frontent and give it hosting. Look into the new
            fancy Admin UI for adding team members. Keep things simple with
            hosting and password protected branches for now until I do some more
            research. I need to create a AMZ Linux2 docker image with quasar and
            the necessary dependencies on it to speed up the build process in
            the CICD pipeline a bit more. If I can shave 20 seconds off build
            time I save a penny per deployment!
          </p>
          <p>
            Add a REST API with proxy integration and use a lambda function to
            attempt to get around the non CORS enabled affirmations api. Also
            experiment more with lambda functions and the rest api interface
            amplify provides. I pushed a helloworld api and lambda function up
            to amplify and tested it with postman. Running it locally on the dev
            server client side and it seems to work too. I even tested testing
            lambda functions locally with 'amplify mock function resolvcors' and
            it worked! That is pretty dang nifty. I don't have to push my lambda
            function resources to the cloud to test them. However, if my lambda
            uses layers to get nodeJS libraries (like axios) I cannot use
            amplify mock (hopefully in the future they will implement this
            feature). So for now I'm restricted to testing in the lambda
            functions console on AWS.
          </p>
          <p>
            Follow
            <a
              href="https://docs.amplify.aws/guides/functions/configuring-lambda/q/platform/js#n1-configuring-secret-values"
              >this guide</a
            >
            to set configuration values for my lambda (like allowed hosts for
            CORS instead of just *).
          </p>
          <p>
            Ok I finally got the affirmation API freaking working (I think). I
            need to do cleanup on the code but that'll be for another day. I
            really need to commit this stuff now. I'm terrible at doing that.
          </p>
        </q-timeline-entry>
        <q-timeline-entry
          title="Modify Main Page"
          subtitle="April 13-14, 2021 Author: Chris"
          icon="build"
        >
          <p>
            Spent way longer than I should have trying to make the front page
            "pretty". Gonna switch into getting the service and component
            working for the real group subpay UI. I should use icongenie to
            generate all the sizes for the group subpay logo.
          </p>
        </q-timeline-entry>
        <q-timeline-entry
          title="Work On Group Subpay Logic"
          subtitle="April 16-18, 2021 Author: Chris"
          icon="build"
        >
          <p>
            Worked with Tony trying to figure out how to share backend AWS
            resources. Put in logic to update subpay form and retrieve data.
            Determined I don't want to listen to every update event on the input
            fields but instead just populate the final array table when they
            submit. However, I don't know how to do this pattern in VueJS yet.
            For now, I'll just receive async events from child components
            whenever they update and I'll update the data table that way. I
            would need to figure out how to "gather" like in MPI distributed
            message programming. Granted, this is probably an ant-pattern since
            frontend stuff should really all be async anyway.
          </p>
          <p>
            Got the core UI functionality for the UI finished. Work on
            integrating with backend now. I'm thinking of just using basic S3
            storage for now.
          </p>
        </q-timeline-entry>
        <q-timeline-entry
          title="It's Backend Time"
          subtitle="April 16-18, 2021 Author: Chris"
          icon="build"
        >
          <p>
            Experiment with S3 storage and Amplify.
          </p>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Timeline Log"
};
</script>
