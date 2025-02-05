import React from "react";

function InformationPage(): React.JSX.Element {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50  dark:bg-gray-900">
      <section className="max-w-3xl w-full p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Lorem Ipsum</h1>
        <label>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
            purus vel nisi fringilla tempor. Aenean ut justo at orci tincidunt
            vehicula non eget lacus. Proin eget sapien eu ligula condimentum
            consectetur.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
            Dolor Sit Amet
          </h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>
              Ut efficitur ligula nec ex lobortis, vel dignissim magna tempor.
            </li>
            <li>
              Integer volutpat ligula ut odio varius, sit amet vulputate turpis
              tempor.
            </li>
            <li>
              Vestibulum cursus dolor ut nisl tincidunt, ac feugiat arcu
              condimentum.
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            Nunc vitae arcu ut ligula fringilla ultricies. Donec vulputate metus
            at venenatis molestie. Maecenas nec lectus ut eros luctus tristique.
          </p>
        </label>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Fermer
          </button>
        </div>
      </section>
    </div>
  );
}

export default InformationPage;
