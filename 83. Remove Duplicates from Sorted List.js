var deleteDuplicates = function(head) {
    const cur=head

    while (head&&head.next) {
        if (head.val===head.next.val) {
            head.next=head.next.next
        } else {
            head=head.next
        }
    }return cur
};
