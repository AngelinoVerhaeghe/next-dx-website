export default function DetailsPage( { params
}: {
    params: { slug: string };
}) {
  return (
    <div>
      <h1>Details of { params.slug }</h1>
      <p>
        This is the Details page of { params.slug }.
      </p>
    </div>
  );
}
