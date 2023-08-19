// var isPalindrome = function(head) {
//     let fast=head
//     let slow=head
//     const stack=[]
//     while (fast){
//         if (!fast.next){
//             slow=slow.next
//             break
//         }
//         stack.push(slow.val)
//         fast=fast.next.next
//         slow=slow.next
//     }
//     while(slow){
//         if(stack.pop()!==slow.val) return false
//         else slow=slow.next
//     }
//     return true
// };

const isPalindrome=head=>{
    const mid=findMidPoint(head)
    const tail=reverse(mid)
    return compare(head,tail)
}
const findMidPoint=head=>{
    let fast=head
    let slow=head
    while(fast&&fast.next){
        if(fast.next){
            fast=fast.next.next
            slow=slow.next
        }
    }
    return slow
}
const reverse=head=>{
    let cur=head
    let prev=null
    let next
    while(cur){
        next=cur.next
        cur.next=prev
        prev=cur
        cur=next
    }
    return prev
}
const compare=(l1,l2)=>{
    while(l1&&l2){
        if(l1.val!==l2.val) return false
        l1=l1.next
        l2=l2.next
    }
    return true
}
