var getIntersectionNode = function(headA, headB) {
    let pointA=headA
    let pointB=headB
    
    while(pointA!==pointB){
        if(pointA===null) pointA=headB
        else pointA=pointA.next
        if(pointB===null) pointB=headA
        else pointB=pointB.next
    }return pointA
};
