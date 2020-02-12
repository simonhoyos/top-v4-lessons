class LinkList{
  constructor(){
      this.head = null
  }
  add(value){
      if(this.head === null){
          this.head = new Node(value, null)
      }else{
          let aux = this.head
          while(aux.ref !== null){
              aux = aux.ref
          }
          aux.ref = new Node(value, null)
      }
  }
  addAt(value, position){
      if(this.head === null){
        this.head = new Node(value, null)
      } else if(position <= 0) {
        const aux = this.head;
        const node = new Node(value, aux);
        this.head = node;
      } else {
        let aux = this.head
        let aux2 = null
        let pos = 0

        while(aux.ref !== null){
            if(pos === position){
                break;
            }
            aux2 = aux
            aux = aux.ref
            pos++
        }

        if(pos < position){
            aux.ref = new Node(value, null)
        }else{
            aux2.ref = new Node(value, aux)
        }
      }
  }
  valueAt(position){
      if(position <= 0){
          return `position 0: ${this.head.value}`
      }else{
          let aux = this.head
          let pos = 0
          while(aux.ref !== null){
              if(pos === position){
                  break;
              }
              aux = aux.ref
              pos++
          }
          if(pos < position){
              console.log(`Max position ${pos}: ${aux.value}`)
          }else{
              console.log(`position ${pos}: ${aux.value}`)
          }
      }
  }
  removeAt(position){
    if(this.head !== null ) return 'The list does not exist'

    if(this.head.ref === null && position === 0){
      this.head = null
    }else{
        let aux = this.head
        let aux2 = null
        let pos = 0
        if(pos === 0){
          this.head = aux.ref
        } else {
            while(aux.ref !== null){
                if(pos === position) break;

                aux2 = aux
                aux = aux.ref
                pos++
            }

            if(pos < position){
                console.log('This position does exit in the list')
            }else{
                aux2.ref = aux.ref
            }
        }

    }
  }
  showList(){
      if(this.head !== null){
          let aux= this.head
          while(aux != null){
              console.log(`Value: ${aux.value} ---- Ref: ${aux.ref}`)
              aux = aux.ref
          }
      }else{
          console.log('There is not Node in the list yet')
      }
  }
}
class Node{
  constructor(value, ref=null){
      this.value = value
      this.ref = ref
  }
}
let list = new LinkList()
list.add(1)
list.add(2)
list.add(3)
list.addAt(4, 0)
list.addAt(5, 1)
list.addAt(6, -1)
list.addAt(7, 4)
list.addAt(8, 10)
list.showList()
list.valueAt(0)
list.valueAt(3)
list.valueAt(10)
list.removeAt(0)
list.showList()




