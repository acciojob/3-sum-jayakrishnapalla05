function threeSum(arr, target) {
  //your code here
	let res=Number.MAX_VALUE;
	arr.sort((a,b) => a-b);
	for(let i=0;i<arr.length-2;i++)
		{
			let j=i+1;
			let k=arr.length-1;
			while(j<k)
				{
					let sum=arr[i]+arr[j]+arr[k];
					if(Math.abs(target-sum) < Math.abs(target-res))
					{
						res=sum;
					}
				   if(sum<target)
				   {
					   j++;
				   }
				   else
				   {
					   k--;
				   }
				}
		}
	return res;
}

module.exports = threeSum;
