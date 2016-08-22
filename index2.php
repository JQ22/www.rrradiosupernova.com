<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Plangular</title>
  <meta name="author" content="Jxnblk">
  <meta name="description" content="Angular directive for custom SoundCloud players">
  <meta name="viewport" content="width=device-width, initial-scale=1">


    <link rel="stylesheet" href="http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.2.1/bassdock.min.css">

    <link rel="stylesheet" href="http://d2v52k3cl9vedd.cloudfront.net/vhs/0.1.0/vhs.min.css">



    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular.min.js"></script>
    <script src="bower_components/plangular/dist/plangular.min.js"></script>


  <style>
    a { word-wrap: break-word }
    code {
      font-size: 87.5%;
      color: #222;
      background-color: rgba(127, 219, 255, .25);
    }
    .container-narrow { max-width: 48em }
    .bg-dark { background-color:#102630; }
    .button-logo {
      width: 2em;
      height: 2em;
      border-radius: 10000px;
      border-width: 3px;
    }
    .button-logo:hover {
      color: #102630;
      background-color: #ff4136;
      opacity: 0.9;
      box-shadow: 0 0 0 2px rgba(255,65,54,.5);
    }
    .button-logo:before,
    .button-logo:after {
      border-radius: inherit;
    }
    .button-outline { border-width: 2px }
    .button-transparent:focus { box-shadow: inset 0 0 0 2px }
    .button-grow { transition: transform, box-shadow, .05s ease }
    .button-grow:hover { transform: scale(1.0625) }
    .button-grow:active { transform: scale(.9375) }
    .icon { top: .03125em }
  </style>

</head>
<body class="" ng-app="app">

  <div class="red bg-dark">
    <header class="center px2 py4 bg-darken-2" plangular="http://soundcloud.com/jxnblk/plangular">
      <button class="h0 h0-responsive center mt4 mb3 button button-outline button-logo button-grow vhs-flicker vhs-delay-3"
        ng-click="playPause()">
        <svg class="icon geomicon" data-icon="play" viewBox="0 0 32 32" style="top:0.03125em;left:0.125em;fill:currentcolor"><path d="M4 4 L28 16 L4 28 z "></path></svg>
      </button>
      <h1 class="h0 caps m0 vhs-flicker vhs-duration-3">Plangular</h1>
      <p class="h3 bold mb3 vhs-fade vhs-duration-4 vhs-delay-2">
        Angular directive for custom SoundCloud players
        <span class="h6 caps">&middot; v3.0.1</span>
      </p>
      <a href="https://github.com/jxnblk/plangular" class="mb4 h3 button button-big button-outline button-grow vhs-bottom vhs-delay-2">
        Github
      </a>
    </header>
    <section id="examples" class="container-narrow mx-auto px2 py3 vhs-bottom vhs-delay-3">
      <h2>
        <a href="#examples" class="red">Examples</a>
      </h2>


<div plangular="http://soundcloud.com/mrsjxn/no-love" class="p2 mb3 flex flex-center bg-darken-2 rounded">
  <button ng-click="playPause()"
    title="Play/Pause"
    class="flex-none h2 mr2 button button-transparent button-grow rounded">
    <svg ng-if="player.playing !== track.src" class="icon geomicon" data-icon="play" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 L28 16 L4 28 z "></path></svg>
    <svg ng-if="player.playing === track.src" class="icon geomicon" data-icon="pause" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z "></path></svg>
  </button>
  <h2 class="h4 caps flex-auto m0">{{track.user.username}} - {{track.title}}</h2>
  <samp class="h6">{{ currentTime | hhmmss }} / {{ duration | hhmmss }}</samp>
</div>




<div plangular="http://soundcloud.com/jxnblk/let-go" class="p2 mb3 flex flex-center bg-darken-2 rounded">
  <button ng-click="playPause()"
    title="Play/Pause"
    class="flex-none h2 mr2 button button-transparent button-grow rounded">
    <svg ng-if="player.playing !== track.src" class="icon geomicon" data-icon="play" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 L28 16 L4 28 z "></path></svg>
    <svg ng-if="player.playing === track.src" class="icon geomicon" data-icon="pause" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z "></path></svg>
  </button>
  <div class="flex-auto">
    <h3 class="h4 m0">{{track.user.username}}</h3>
    <h2 class="h4 caps m0">{{track.title}}</h2>
    <progress
      class="progress"
      ng-click="seek($event)"
      ng-value="currentTime / duration || 0">
      {{ currentTime / duration }}
    </progress>
  </div>
</div>




<div plangular="http://soundcloud.com/jxnblk/sets/yello" class="mb3 bg-darken-2 rounded">
  <div class="p2">
    <div class="flex flex-center">
      <h4 class="m0 flex-auto">{{playlist.user.username}}</h4>
      <samp class="h6">{{ currentTime | hhmmss }} / {{ duration | hhmmss }}</samp>
    </div>
    <h3 class="h1 caps mt0">{{playlist.title}}</h3>
    <div class="flex flex-center">
      <button class="flex-none h3 button button-narrow button-transparent button-grow rounded"
        title="Play Previous Track"
        ng-click="previous()">
        <svg class="icon geomicon" data-icon="previous" viewBox="0 0 32 32" style="fill:currentcolor"><path d="M4 4 H8 V14 L28 4 V28 L8 18 V28 H4 z "></path></svg>
      </button>
      <button class="flex-none h1 button button-transparent button-grow rounded"
        title="Play/Pause"
        ng-click="playPause(index)">
        <svg ng-if="player.playing !== track.src" class="icon geomicon" data-icon="play" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 L28 16 L4 28 z "></path></svg>
        <svg ng-if="player.playing === track.src" class="icon geomicon" data-icon="pause" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z "></path></svg>
      </button>
      <button class="flex-none h3 button mr2 button-narrow button-transparent button-grow rounded"
        title="Play Next Track"
        ng-click="next()">
        <svg class="icon geomicon" data-icon="next" viewBox="0 0 32 32" style="fill:currentcolor"><path d="M4 4 L24 14 V4 H28 V28 H24 V18 L4 28 z "></path></svg>
      </button>
      <progress
        class="progress"
        ng-click="seek($event)"
        ng-value="currentTime / duration || 0">
        {{ currentTime / duration }}
      </progress>
    </div>
  </div>
  <ul class="list-reset">
    <li ng-repeat="track in tracks">
      <button
        class="flex flex-center full-width left-align button button-transparent"
        title="Play {{track.title}}"
        ng-class="{'is-active': player.playing === track.src }"
        ng-click="playPause($index)">
        <span class="flex-auto">
          {{track.user.username}} - {{track.title}}
        </span>
        <span class="h6">
          {{ track.duration / 1000 | hhmmss }}
        </span>
      </button>
    </li>
  </ul>
</div>




<div plangular="http://soundcloud.com/jxnblk/tracks" class="mb3 bg-darken-2 rounded">
  <div class="p2">
    <div class="flex flex-center mb1">
      <h4 class="caps m0 flex-auto">Jxnblk</h4>
      <samp class="h6">{{ currentTime | hhmmss }} / {{ duration | hhmmss }}</samp>
    </div>
    <div class="flex flex-center">
      <button class="flex-none h3 button button-narrow button-transparent button-grow rounded"
        title="Play Previous Track"
        ng-click="previous()">
        <svg class="icon geomicon" data-icon="previous" viewBox="0 0 32 32" style="fill:currentcolor"><path d="M4 4 H8 V14 L28 4 V28 L8 18 V28 H4 z "></path></svg>
      </button>
      <button class="flex-none h1 button button-transparent button-grow rounded"
        title="Play/Pause"
        ng-click="playPause(index)">
        <svg ng-if="player.playing !== track.src" class="icon geomicon" data-icon="play" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 L28 16 L4 28 z "></path></svg>
        <svg ng-if="player.playing === track.src" class="icon geomicon" data-icon="pause" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z "></path></svg>
      </button>
      <button class="flex-none h3 button mr2 button-narrow button-transparent button-grow rounded"
        title="Play Next Track"
        ng-click="next()">
        <svg class="icon geomicon" data-icon="next" viewBox="0 0 32 32" style="fill:currentcolor"><path d="M4 4 L24 14 V4 H28 V28 H24 V18 L4 28 z "></path></svg>
      </button>
      <progress
        class="progress"
        ng-click="seek($event)"
        ng-value="currentTime / duration || 0">
        {{ currentTime / duration }}
      </progress>
    </div>
  </div>
  <ul class="list-reset">
    <li ng-repeat="track in tracks | limitTo:8">
      <button
        class="flex flex-center full-width left-align button button-transparent"
        title="Play {{track.title}}"
        ng-class="{'is-active': player.playing === track.src }"
        ng-click="playPause($index)">
        <span class="flex-auto">
          {{track.user.username}} - {{track.title}}
        </span>
        <span class="h6">
          {{ track.duration / 1000 | hhmmss }}
        </span>
      </button>
    </li>
  </ul>
</div>




<!--
  Currently this does NOT work
  in some cases because of SoundCloud API's
  incorrect handling of JSONP and
  illegal characters in user generated content.
  ng-if is used below to hide the player in
  Safari when the error occurs
-->

<div plangular="http://soundcloud.com/jxnblk/likes" class="mb3 bg-darken-2 rounded">
  <div ng-if="track" class="p2">
    <div class="flex flex-center">
      <h4 class="caps m0 flex-auto">Jxnblk’s Likes</h4>
      <samp class="h6">{{ currentTime | hhmmss }} / {{ duration | hhmmss }}</samp>
    </div>
    <div class="flex flex-center">
      <button class="flex-none h3 button button-narrow button-transparent"
        title="Play Previous Track"
        ng-click="previous()">
        <svg class="icon geomicon" data-icon="previous" viewBox="0 0 32 32" style="fill:currentcolor"><path d="M4 4 H8 V14 L28 4 V28 L8 18 V28 H4 z "></path></svg>
      </button>
      <button class="flex-none h1 button button-transparent"
        title="Play/Pause"
        ng-click="playPause(index)">
        <svg ng-if="player.playing !== track.src" class="icon geomicon" data-icon="play" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 L28 16 L4 28 z "></path></svg>
        <svg ng-if="player.playing === track.src" class="icon geomicon" data-icon="pause" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z "></path></svg>
      </button>
      <button class="flex-none h3 button mr2 button-narrow button-transparent"
        title="Play Next Track"
        ng-click="next()">
        <svg class="icon geomicon" data-icon="next" viewBox="0 0 32 32" style="fill:currentcolor"><path d="M4 4 L24 14 V4 H28 V28 H24 V18 L4 28 z "></path></svg>
      </button>
      <progress
        class="progress"
        ng-click="player.seek($event)"
        ng-value="currentTime / duration || 0">
        {{ currentTime / duration }}
      </progress>
    </div>
  </div>
  <ul ng-if="tracks" class="list-reset">
    <li ng-repeat="track in tracks | limitTo:8">
      <button
        class="flex flex-center full-width left-align button button-transparent"
        title="Play {{track.title}}"
        ng-class="{'is-active': player.playing === track.src }"
        ng-click="playPause($index)">
        <span class="flex-auto">
          {{track.user.username}} - {{track.title}}
        </span>
        <span class="h6">
          {{ track.duration / 1000 | hhmmss }}
        </span>
      </button>
    </li>
  </ul>
</div>



    </section>
  </div>

  <div class="container-narrow mx-auto px2">

    <div class="py3" ng-non-bindable>
      <div class="display-none">
  <h1>Plangular</h1>
  <p>
    Angular directive for custom SoundCloud players
    <a href="http://jxnblk.com/plangular">jxnblk.com/plangular</a>
  </p>
</div>

<h2 id="getting-started"><a href="#getting-started">Getting Started</a></h2><pre>npm install plangular-3</pre><p>Or install with Bower:</p>
<pre>bower install plangular</pre><p>Or use the CDN:</p>
<pre><span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"http://d2v52k3cl9vedd.cloudfront.net/plangular/3.0.1/plangular.min.js"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span></pre><h2 id="angular-app"><a href="#angular-app">Angular app</a></h2><p>Include a link to plangular after including Angular.</p>
<pre>&lt;script src=<span class="hljs-string">"//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"</span>&gt;<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"bower_components/plangular/dist/plangular.min.js"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span></span></pre><h2 id="initialize-the-app"><a href="#initialize-the-app">Initialize the app</a></h2><p>Configure Plangular with your own <code>client_id</code>.
For new SoundCloud apps, you can register at <a href="https://developers.soundcloud.com/">https://developers.soundcloud.com/</a></p>
<pre><span class="hljs-tag">&lt;<span class="hljs-title">body</span> <span class="hljs-attribute">ng-app</span>=<span class="hljs-value">"app"</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">var</span> app = angular.module(<span class="hljs-string">'app'</span>, [<span class="hljs-string">'plangular'</span>])
      .config(<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(plangularConfigProvider)</span></span>{
        plangularConfigProvider.clientId = <span class="hljs-string">'[YOUR-CLIENT-ID]'</span>;
      });
  </span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span></pre><h2 id="create-a-plangular-directive-instance"><a href="#create-a-plangular-directive-instance">Create a plangular directive instance</a></h2><pre><span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">plangular</span>=<span class="hljs-value">"http://soundcloud.com/jxnblk/plangular"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span></pre><h2 id="include-track-info"><a href="#include-track-info">Include track info</a></h2><pre><span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">plangular</span>=<span class="hljs-value">"http://soundcloud.com/jxnblk/plangular"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">h3</span>&gt;</span>{{track.user.username}} - {{track.title}}<span class="hljs-tag">&lt;/<span class="hljs-title">h3</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">ng-href</span>=<span class="hljs-value">"{{track.permalink_url}}"</span>&gt;</span>View on SoundCloud<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span></pre><h2 id="add-player-controls"><a href="#add-player-controls">Add player controls</a></h2><pre><span class="hljs-tag">&lt;<span class="hljs-title">button</span> <span class="hljs-attribute">ng-click</span>=<span class="hljs-value">"playPause()"</span>&gt;</span>Play/Pause<span class="hljs-tag">&lt;/<span class="hljs-title">button</span>&gt;</span></pre><p>Or with separate play/pause controls:</p>
<pre><span class="hljs-tag">&lt;<span class="hljs-title">button</span> <span class="hljs-attribute">ng-click</span>=<span class="hljs-value">"play()"</span>&gt;</span>Play<span class="hljs-tag">&lt;/<span class="hljs-title">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">button</span> <span class="hljs-attribute">ng-click</span>=<span class="hljs-value">"pause()"</span>&gt;</span>Pause<span class="hljs-tag">&lt;/<span class="hljs-title">button</span>&gt;</span></pre><h2 id="show-current-time-and-duration"><a href="#show-current-time-and-duration">Show current time and duration</a></h2><p>Use the <code>hhmmss</code> filter to format seconds as <code>hh:mm:ss</code> strings.</p>
<pre><span class="hljs-tag">&lt;<span class="hljs-title">small</span>&gt;</span>{{ currentTime | hhmmss }} | {{ duration | hhmmss }}<span class="hljs-tag">&lt;/<span class="hljs-title">small</span>&gt;</span></pre><h2 id="progress-bar"><a href="#progress-bar">Progress bar</a></h2><pre><span class="hljs-tag">&lt;<span class="hljs-title">progress</span> <span class="hljs-attribute">ng-value</span>=<span class="hljs-value">"currentTime / duration || 0"</span>&gt;</span>
  {{ currentTime / duration || 0 }}
<span class="hljs-tag">&lt;/<span class="hljs-title">progress</span>&gt;</span></pre><h2 id="add-scrubber-functionality"><a href="#add-scrubber-functionality">Add scrubber functionality</a></h2><pre><span class="hljs-tag">&lt;<span class="hljs-title">progress</span>
  <span class="hljs-attribute">ng-click</span>=<span class="hljs-value">"seek($event)"</span>
  <span class="hljs-attribute">ng-value</span>=<span class="hljs-value">"currentTime / duration"</span>&gt;</span>
  {{ currentTime / duration }}
<span class="hljs-tag">&lt;/<span class="hljs-title">progress</span>&gt;</span></pre><h2 id="add-images"><a href="#add-images">Add images</a></h2><pre><span class="hljs-tag">&lt;<span class="hljs-title">img</span> <span class="hljs-attribute">ng-src</span>=<span class="hljs-value">"{{ track.artwork_url  }}"</span> <span class="hljs-attribute">alt</span>=<span class="hljs-value">"{{ track.title }}"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">img</span> <span class="hljs-attribute">ng-src</span>=<span class="hljs-value">"{{ track.waveform_url }}"</span> <span class="hljs-attribute">alt</span>=<span class="hljs-value">"waveform"</span> /&gt;</span></pre><p>Note: The waveform image that the SoundCloud API provides is a 1200 x 280px PNG with a light gray frame and transparent middle. To show progress use absolute positioning with the waveform in front. The light gray color is <code>#efefef</code>.</p>
<h2 id="loading-states"><a href="#loading-states">Loading states</a></h2><p>Use the <code>ng-if</code> directive to show and hide content based on whether the track has loaded.</p>
<pre><span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">ng-if</span>=<span class="hljs-value">"!track"</span>&gt;</span><span class="hljs-comment">&lt;!-- Loading state --&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">ng-if</span>=<span class="hljs-value">"track"</span>&gt;</span><span class="hljs-comment">&lt;!-- Player --&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span></pre><h2 id="playlists"><a href="#playlists">Playlists</a></h2><p>Use the <code>tracks</code> array and <code>ng-repeat</code> when using a SoundCloud playlist. Pass the <code>$index</code> to the <code>playPause()</code> method to trigger playback on a per-track basis. Determine which track is currently playing with <code>player.playing === track.src</code>.</p>
<pre><span class="hljs-tag">&lt;<span class="hljs-title">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">li</span> <span class="hljs-attribute">ng-repeat</span>=<span class="hljs-value">"track in tracks"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">button</span>
      <span class="hljs-attribute">ng-click</span>=<span class="hljs-value">"playPause($index)"</span>
      <span class="hljs-attribute">ng-class</span>=<span class="hljs-value">"{'active': player.playing === track.src}"</span>&gt;</span>
      {{track.user.username}} - {{track.title}}
    <span class="hljs-tag">&lt;/<span class="hljs-title">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">ul</span>&gt;</span></pre><h2 id="user-tracks"><a href="#user-tracks">User tracks</a></h2><p>To load the most recent tracks from a given user, use the tracks endpoint. Use <code>ng-repeat</code> to iterate over the <code>tracks</code> array.</p>
<pre><span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">plangular</span>=<span class="hljs-value">"http://soundcloud.com/jxnblk/tracks"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span></pre><h2 id="user-likes"><a href="#user-likes">User likes</a></h2><p>To load the most recent likes from a given user, use the likes endpoint.</p>
<pre><span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">plangular</span>=<span class="hljs-value">"http://soundcloud.com/jxnblk/likes"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span></pre><h2 id="previous-next-controls"><a href="#previous-next-controls">Previous/next controls</a></h2><p>To skip to the next and previous track in a playlist or array of tracks, use the <code>previous()</code> and <code>next()</code> methods.</p>
<pre><span class="hljs-tag">&lt;<span class="hljs-title">button</span> <span class="hljs-attribute">ng-click</span>=<span class="hljs-value">"previous()"</span>&gt;</span>Previous<span class="hljs-tag">&lt;/<span class="hljs-title">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">button</span> <span class="hljs-attribute">ng-click</span>=<span class="hljs-value">"next()"</span>&gt;</span>Next<span class="hljs-tag">&lt;/<span class="hljs-title">button</span>&gt;</span></pre><h2 id="example-templates"><a href="#example-templates">Example templates</a></h2><p>See more examples and starter templates in
<a href="docs/examples">docs/examples</a></p>
<hr>
<h2 id="api"><a href="#api">API</a></h2><h3 id="code-track-code"><a href="#code-track-code"><code>track</code></a></h3><p>Object returned from the SoundCloud API</p>
<h3 id="code-tracks-code"><a href="#code-tracks-code"><code>tracks</code></a></h3><p>An array of track objects if the instance is a playlist or list of tracks</p>
<h3 id="code-player-code"><a href="#code-player-code"><code>player</code></a></h3><p>Audio player object</p>
<h3 id="code-audio-code"><a href="#code-audio-code"><code>audio</code></a></h3><p>The HTML5 <code>&lt;audio&gt;</code> element used by the player, exposed for access to media events.</p>
<h3 id="code-current-time-code"><a href="#code-current-time-code"><code>currentTime</code></a></h3><p>Angular-friendly <code>currentTime</code> from the audio element</p>
<h3 id="code-duration-code"><a href="#code-duration-code"><code>duration</code></a></h3><p>Angular-friendly <code>duration</code> from the audio element. Note: you can also access duration in milliseconds from the SoundCloud track object.</p>
<h3 id="code-index-code"><a href="#code-index-code"><code>index</code></a></h3><p>Currently playing track index in a playlist or other array of tracks.</p>
<h3 id="code-playlist-code"><a href="#code-playlist-code"><code>playlist</code></a></h3><p>Cloned object of <code>track</code> if <code>track.tracks</code> exists. This is useful for displaying the title of the playlist.</p>
<h3 id="code-play-i-code"><a href="#code-play-i-code"><code>play(i)</code></a></h3><p>Plays the track. Optionally pass an index when handling playlists.</p>
<h3 id="code-pause-code"><a href="#code-pause-code"><code>pause()</code></a></h3><p>Pauses the player.</p>
<h3 id="code-play-pause-i-code"><a href="#code-play-pause-i-code"><code>playPause(i)</code></a></h3><p>Toggles playback. Optionally pass an index when handling playlists.</p>
<h3 id="code-previous-code"><a href="#code-previous-code"><code>previous()</code></a></h3><p>Skip to previous track when handling playlists</p>
<h3 id="code-next-code"><a href="#code-next-code"><code>next()</code></a></h3><p>Skip to next track when handling playlists</p>
<h3 id="code-seek-event-code"><a href="#code-seek-event-code"><code>seek($event)</code></a></h3><p>Sets the audio element’s <code>currentTime</code> property based on a pointer event.</p>
<hr>
<h2 id="using-the-sound-cloud-api"><a href="#using-the-sound-cloud-api">Using the SoundCloud API</a></h2><h3 id="track-object"><a href="#track-object">Track object</a></h3><p>For more details on the SoundCloud track object, see <a href="https://developers.soundcloud.com/docs/api/reference#tracks">https://developers.soundcloud.com/docs/api/reference#tracks</a></p>
<h3 id="terms"><a href="#terms">Terms</a></h3><p>According to the SoundCloud API terms you must:</p>
<ul>
<li>Credit the user as the creator of the content</li>
<li>Credit SoundCloud as the source</li>
<li>Include a link to the sound on SoundCloud (i.e. a link using <code>track.permalink_url</code>)</li>
</ul>
<p>Read more here: <a href="http://developers.soundcloud.com/docs/api/terms-of-use">http://developers.soundcloud.com/docs/api/terms-of-use</a></p>
<h3 id="troubleshooting"><a href="#troubleshooting">Troubleshooting</a></h3><p>SoundCloud provides an option for users to prevent streaming to third-party apps.
If your sound isn&#39;t playing check the <code>track.streamable</code> variable.
If it&#39;s set to false, there is no way to play that sound with the API.</p>

    </div>

    <section id="more-examples" class="py4">
      <h2>
        <a href="#more-examples">
          More Examples
        </a>
      </h2>

        <div class="mb2">

<div plangular="http://soundcloud.com/mrsjxn/morning-bounce"
  class="flex flex-center">
  <button ng-click="playPause()"
    title="Play/Pause"
    class="flex-none h4 mr2 button button-transparent button-grow rounded">
    <svg ng-if="player.playing !== track.src" class="icon geomicon" data-icon="play" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 L28 16 L4 28 z "></path></svg>
    <svg ng-if="player.playing === track.src" class="icon geomicon" data-icon="pause" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z "></path></svg>
  </button>
  <div class="bold caps">
    {{track.user.username}} - {{track.title}}
  </div>
</div>

        </div>

        <div class="mb2">

<div plangular="http://soundcloud.com/mrsjxn/touch-this"
  class="flex flex-center">
  <button ng-click="playPause()"
    title="Play/Pause"
    class="flex-none h4 mr2 button button-transparent button-grow rounded">
    <svg ng-if="player.playing !== track.src" class="icon geomicon" data-icon="play" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 L28 16 L4 28 z "></path></svg>
    <svg ng-if="player.playing === track.src" class="icon geomicon" data-icon="pause" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z "></path></svg>
  </button>
  <div class="flex-auto">
    <progress
      class="progress red"
      ng-click="seek($event)"
      ng-value="currentTime / duration || 0">
      {{ currentTime / duration }}
    </progress>
  </div>
</div>

        </div>

        <div class="mb2">

<div plangular="http://soundcloud.com/jxnblk/really-wanna"
  class="flex flex-center">
  <button ng-click="playPause()"
    title="Play/Pause"
    class="flex-none h4 mr2 button button-transparent button-grow rounded">
    <svg ng-if="player.playing !== track.src" class="icon geomicon" data-icon="play" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 L28 16 L4 28 z "></path></svg>
    <svg ng-if="player.playing === track.src" class="icon geomicon" data-icon="pause" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z "></path></svg>
  </button>
  <div class="h5 bold caps mr2">
    {{track.user.username}} - {{track.title}}
  </div>
  <div class="flex-auto">
    <progress
      class="progress red"
      ng-click="seek($event)"
      ng-value="currentTime / duration || 0">
      {{ currentTime / duration }}
    </progress>
  </div>
</div>

        </div>

        <div class="mb2">

<div plangular="http://soundcloud.com/mrsjxn/bbb" class="flex flex-center">
  <div class="mr2">
    <img ng-src="{{track.artwork_url}}" alt="{{track.title}} artwork"/>
  </div>
  <div class="flex-auto">
    <h3 class="h4 m0">{{track.user.username}}</h3>
    <h2 class="h4 caps m0">{{track.title}}</h2>
    <div class="flex flex-center">
      <button ng-click="playPause()"
        title="Play/Pause"
        class="flex-none h4 mr2 button button-transparent button-grow rounded">
        <svg ng-if="player.playing !== track.src" class="icon geomicon" data-icon="play" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 L28 16 L4 28 z "></path></svg>
        <svg ng-if="player.playing === track.src" class="icon geomicon" data-icon="pause" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z "></path></svg>
      </button>
      <div class="flex-auto">
        <progress
          class="progress"
          ng-click="seek($event)"
          ng-value="currentTime / duration || 0">
          {{ currentTime / duration }}
        </progress>
      </div>
    </div>
  </div>
</div>


        </div>

        <div class="mb2">

<div plangular="http://soundcloud.com/jxnblk/american-party"
  class="py1">
  <div class="relative bg-silver" style="height:6rem;">
    <div class="absolute top-0 bottom-0 left-0 bg-aqua"
      style="width:{{ 100 * (currentTime / duration) || 0 }}%"></div>
    <img ng-src="{{track.waveform_url}}"
      alt="{{track.title}} waveform"
      style="width:100%;height:100%;-webkit-filter:contrast(200%);filter:contrast(200%);"
      class="absolute top-0 right-0 bottom-0 left-0" />
    <div class="absolute top-0 right-0 bottom-0 left-0" ng-click="seek($event)"></div>
    <div class="absolute m1 top-0 bottom-0 mt3 mb3 flex flex-center">
      <button ng-click="playPause()"
        title="Play/Pause"
        class="flex-none h4 mr1 button button-transparent button-grow rounded">
        <svg ng-if="player.playing !== track.src" class="icon geomicon" data-icon="play" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 L28 16 L4 28 z "></path></svg>
        <svg ng-if="player.playing === track.src" class="icon geomicon" data-icon="pause" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z "></path></svg>
      </button>
      <div>
        <h3 class="h6 caps m0">{{track.user.username}}</h3>
        <h2 class="h4 caps m0">{{track.title}}</h2>
      </div>
    </div>
  </div>
</div>


        </div>

        <div class="mb2">

<div plangular="http://soundcloud.com/mrsjxn/valis"
  style="background-image:url(https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg)"
  class="py2 white bg-cover bg-center">
  <div class="center py4">
    <h4 class="caps mb0">{{track.user.username}}</h4>
    <h3 class="h0 h0-responsive caps m0">{{track.title}}</h3>
  </div>
  <div class="flex flex-center px2">
    <button ng-click="playPause()"
      title="Play/Pause"
      class="flex-none h2 mr2 button button-transparent button-grow rounded">
      <svg ng-if="player.playing !== track.src" class="icon geomicon" data-icon="play" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 L28 16 L4 28 z "></path></svg>
      <svg ng-if="player.playing === track.src" class="icon geomicon" data-icon="pause" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z "></path></svg>
    </button>
    <div class="flex-auto">
      <progress
        class="progress"
        ng-click="seek($event)"
        ng-value="currentTime / duration || 0">
        {{ currentTime / duration }}
      </progress>
    </div>
  </div>
</div>

        </div>

    </section>

    <section id="cta" class="center py4">
      <a href="https://github.com/jxnblk/plangular" class="h3 button button-big button-outline button-grow red">Github</a>
    </section>

    <footer class="py2 border-top">
      <div class="flex flex-baseline flex-wrap mb3 mxn1">
        <a href="//jxnblk.com/plangular" class="button ml1 mr1 button-small button-link">Plangular</a>
        <div class="h6">v3.0.1</div>

        <a href="https://github.com/jxnblk/plangular" class="button ml1 mr1 button-small button-link">Github</a>
        <a href="//npmjs.com/package/plangular-3" class="button ml1 mr1 button-small button-link">NPM</a>
        <div class="flex-auto"></div>
        <p class="h5 bold m0 px1">
          Made by
          <a href="//jxnblk.com">Jxnblk</a>.
        </p>
      </div>
    </footer>

  </div>

  <div plangular class="fixed right-0 bottom-0 p2">
    <button
      ng-if="player.playing"
      ng-click="pause()"
      class="button button-small black bg-red vhs-bottom">
      <svg class="icon geomicon" data-icon="pause" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor;top:-.0625em"><path d="M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z "></path></svg>
      Pause
    </button>
  </div>

<script>
  var app = angular.module('app', ['plangular'])
    .config(function(plangularConfigProvider){
      plangularConfigProvider.clientId = 'aeb5b3f63ac0518f8362010439a77ca1';
    });
</script>

</body>
</html>
