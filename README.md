Stunsail
========

_A state management library designed to interoperate with 
[Wale](https://github.com/higherkinded/wale)._

## Design principles

The set of design goals and derived principles is quite simple:
- Provide first-class support for Wale.
- Keep operations on state atomic and predictable.
- Keep operations sequenced. Operations must be queued and use locks.
