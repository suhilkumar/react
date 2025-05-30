create a app for keeping a track of book lists

# steps

for that you will need to create 4 components

1 component for creating the books in the list
2 component for rendering the list
3 component for showing the book
4 comoonent for editing the book

# Book Create

    we store the list as an array of object for storing the books.

    => [ {id:"uniqueId" , Title: "title", Description:"book information"}]

    we need to gather info and functionality related books

    create a book state at root level for managing the books state

    # Functionality

        we need to create a book which add that obj in a book array

        edit the book which again update the content of the book object

        delete the book which will delete the book object from the array
