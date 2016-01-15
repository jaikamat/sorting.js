describe('Merge takes two sorted arrays', function(){
   it('handles an empty array', function(){
       expect( merge([],[]) ).toEqual( [] );
   });

   it('handles two arrays', function() {
       expect( merge([4,9,10],[3,7,8]) ).toEqual([3,4,7,8,9,10]);
   });

   it('handles two arrays of differing sizes', function() {
       expect( merge([1,8,10], [2,3,4,6]) ).toEqual([1,2,3,4,6,8,10]);
   });

   it('handles duplicate elements', function() {
       expect( merge([4,4,6,6],[1,1,2,2]) ).toEqual([1,1,2,2,4,4,6,6])
   });

   it('only handles numbers', function () {
       expect( merge.bind(null, [1,2,null,undefined],["string",3,4,5])).toThrowError(TypeError,'no.');
   });
});