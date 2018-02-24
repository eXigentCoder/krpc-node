# krpc-node

A node.js client library for krpc. Allows you to send commands to Kerbal Space Program from node.

> JavaScript to space via krpc!

![NPM](https://nodei.co/npm/krpc-node.png)

![Build status](https://travis-ci.org/eXigentCoder/krpc-node.svg?branch=master)

# Table of Contents

> Client

-   [Client constructor function](#clientconstructorfunction)
-   [Client object](#client)

> Services:

-   [SpaceCenter](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/space-center.md) - Main api for controlling KSP.
-   [UI](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/ui.md) - Api for interacting with user interface elements.
-   [InfernalRobotics](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/infernal-robotics.md) - Api for interacting with the Infernal Robotics mod.
-   [KerbalAlarmClock](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/kerbal-alarm-clock.md) - Api for interacting with the Kerbal Alarm Clock mod.
-   [RemoteTech](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/remote-tech.md) - Api for interacting with the Remote Tech mod.
-   [Drawing](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/drawing.md) - Api for for drawing objects in the flight scene.
-   [KRPC](https://github.com/eXigentCoder/krpc-node/blob/master/documentation/krpc.md) - Api for interacting with the kRPC server.

> Examples:

-   [Examples](https://github.com/eXigentCoder/krpc-node-examples) - Some practical examples to get you started.



**Parameters**

-   `options` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The options used to create the client
    -   `options.protocol` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** ="ws" - The protocol to use to connect to the server. ws or wss.
    -   `options.host` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** ="127.0.0.1" - The host address of the server.
    -   `options.port` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))** ="50000" - The port number on which to connect to the server.
    -   `options.wsProtocols` **\[([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>)]** WebSocket protocols.
    -   `options.wsOptions` **\[[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]** Additional connection options.
-   `callback` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)** The function called once the client has been created.

**Callback Parameters**

-	`err` **[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)** The error object if there was a problem creating the client, otherwise null.
-	`client` **[Client](#client)** The client to use for subsequent calls.

**Examples**

```javascript
let util = require('util');
let Client = require('krpc-node');
let options = null;
Client(options, clientCreated);

function clientCreated(err, client) {
    if(err){
        throw err;
    }
    console.log(util.format('Connection Opened'));
    client.send(client.services.krpc.getClients(), getClientsCompleted);
}

function getClientsCompleted(err, response){
    if(err){
        throw err;
    }
    expect(response.error).to.not.be.ok();
    expect(response.results.length).to.equal(1);
    let result = response.results[0];
    expect(result.error).to.not.be.ok();
    result.value.items.forEach(function (item) {
        expect(item).to.be.ok();
		console.log(item);
    });
}
```

## client

An instance of the Client class

**Properties**

- `callbackStack` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)&gt;** An ordered array of callback functions to call when responses are received.
- `decodeStack` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)&gt;** An ordered array of decode functions to call when responses are received.
- `rpc` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Contains items related to communicating directly with the server.
    - `rpc.socket` **[WebSocket](https://developer.mozilla.org/en-US/docs/WebSockets)** The underlying websocket instance used to communicate with the server.
    - `rpc.emitter` **[EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)** The emitter that handles events.
    - `rpc.on` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Registers for one of the events for messages from the server [open, message, error, close].
- `send` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Sends one or more calls to the server to process
- `services` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The collection of services that can be called. Each function within a service will return a procedureCall object.
    - `services.drawing` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Provides functionality for drawing objects in the flight scene. For drawing and interacting with the user interface, see the UI service.
    - `services.infernalRobotics` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** This service provides functionality to interact with <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/104535-105-magic-smoke-industries-infernal-robotics-0214/">Infernal Robotics</a>.
    - `services.kerbalAlarmClock` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** This service provides functionality to interact with <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/22809-10x-kerbal-alarm-clock-v3500-dec-3/">Kerbal Alarm Clock</a>.
    - `services.krpc` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Main kRPC service, used by clients to interact with basic server functionality.
    - `services.remoteTech` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** This service provides functionality to interact with <a href="http://forum.kerbalspaceprogram.com/index.php?/topic/75245-11-remotetech-v1610-2016-04-12/">RemoteTech</a>.
    - `services.spaceCenter` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Provides functionality to interact with Kerbal Space Program. This includes controlling the active vessel, managing its resources, planning maneuver nodes and auto-piloting.
    - `services.ui` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Provides functionality for drawing and interacting with in-game user interface elements. For drawing 3D objects in the flight scene, see the Drawing service.
- `encoders` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The raw [encoders](#encoders) that can be used to manually encode values.
- `decoders` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The raw [decoders](#decoders) that can be used to manually decode values.
- `streams` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The list of registered stream responses and how to decode them
- `streamState` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The last known values of the result returned from the streams.
- `connectToStreamServer` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Establishes a separate connection to the stream server.
- `addStream` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Adds a single call to the stream communication. Make sure you call connectToStreamServer fist.
- `removeStream` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Removes a single call from the stream communication. Make sure you call connectToStreamServer and of course have called addStream fist.
- `stream` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Contains items related to communicating with the stream server.
    - `stream.socket` **[WebSocket](https://developer.mozilla.org/en-US/docs/WebSockets)** The underlying websocket instance used to communicate with the server.
    - `stream.emitter` **[EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)** The emitter that handles events.
    - `stream.on` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Registers for one of the events for messages from the server [open, message, error, close].

## On

Registers for one of the events [open, message, error, close].

**Parameters**

-   `eventName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The event to register for [open, message, error, close].
-   `fn` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** The function to execute when an event happens

## Send

Sends one or more calls to the server to process

**Parameters**

-   `calls` **([procedureCall](#procedurecall) | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[procedureCall](#procedurecall)>)** One or more calls to send to the server.
-   `callback` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)** The function called once the client has been created.

**Callback Parameters**

-	`err` **[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)** The error object if there was a problem creating the client, otherwise null.
-	`response` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The client response object.

## procedureCall

A procedure call with a decode function an a procedure object to send to the server

**Properties**

-   `decode` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** The function used to decode the response from the server.
-   `call` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The actual call + arguments to send to the server to execute.

## addStream

Adds an call to the continuous update stream.

**Parameters**

-   `call` **[procedureCall](#procedurecall)** One or more calls to send to the server.
-   `propertyPath` **[procedureCall](#procedurecall)** The [lodash set path](https://lodash.com/docs/4.17.4#set) to use to set the result of the stream call on `client.streamState`.
-   `callback` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)** The function called once the stream has been added.

**Callback Parameters**

-	`err` **[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)** The error object if there was a problem creating the client, otherwise null.
-	`stream` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The stream object.

## removeStream

Removes a call from the continuous update stream.

**Parameters**

-   `propertyPath` **[procedureCall](#procedurecall)** The [lodash set path](https://lodash.com/docs/4.17.4#set) to used to set the result of the stream call on `client.streamState`.
-   `callback` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)** The function called once the stream has been added.

**Callback Parameters**

-	`err` **[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)** The error object if there was a problem creating the client, otherwise null.

# Practical Examples

Checkout [the examples repository](https://github.com/eXigentCoder/krpc-node-examples) for some practical examples.
