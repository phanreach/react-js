export default function CourseCard(props) {
  return (
    <div className="bg-white max-w-sm p-6 border rounded-lg shadow">
      <img className="rounded-lg" src={props.img} alt={props.title} />

      <h5 className="mt-6 mb-2 text-2xl font-bold text-gray-900">
        {props.title}
      </h5>

      <p className="mb-3 text-gray-700">{props.subtitle}</p>
      <p className="mb-4 font-semibold text-blue-600 text-lg">{props.price}</p>

      <button
        type="button"
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full"
      >
        Enroll Now
      </button>
    </div>
  );
}
