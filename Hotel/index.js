class Room {
  constructor(number) {
    this.number = number
    this.available = true
    this.guests = 0
  }
}

class Hotel {
  constructor(rooms) {
    this.rooms = [];
    for(let i = 1; i <= rooms; i++) {
      this.rooms.push(new Room(i));
    }
  }

  checkin(roomNumber, guests) {
    for(let room of this.rooms) {
      if(room.number === roomNumber && room.available) {
        room.available = false;
        room.guests = guests;

        return true;
      }
    }

    return false;
  }

  checkout(roomNumber) {
    for(let room of this.rooms) {
      if(room.number === roomNumber && !room.available) {
        room.available = true;
        room.guests = 0;

        return true;
      }
    }

    return false;
  }

  getAvailableRooms() {
    return this.rooms.filter(room => room.available)
  }

  getOccupiedRooms() {
    // const occupiedRooms = [];

    // for(let room of this.rooms) {
    //   if(!room.available) {
    //     occupiedRooms.push(room);
    //   }
    // }

    // return occupiedRooms;

    return this.rooms.filter(room => !room.available)
  }
}

module.exports = {
  Room,
  Hotel
};
