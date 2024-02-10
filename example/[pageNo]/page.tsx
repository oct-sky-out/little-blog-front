export default function Page({ params }: { params: { pageNo: number } }) {
	return <div>example page {params.pageNo}</div>;
}
