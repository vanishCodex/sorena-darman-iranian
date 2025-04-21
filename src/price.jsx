export default function ServicesTable() {
    const services = [
      { name: "سرم تراپی", price: 200 },
      { name: "پانسمان", price: 150 },
      { name: "تزریق عضلانی", price: 300 },
      { name: "سونداژ مثانه", price: 250 },
      { name: "سونداژ معده NGT", price: 400 },
      { name: "ویزیت پزشک عمومی", price: 100 },
      { name: "فیزیوتراپی", price: 350 },
      { name: "دکتر مامایی", price: 500 },
      { name: "ویزیت پزشک متخصص", price: 450 },
    ];
  
    return (
      <table id="priceList" className="table-auto border-collapse border border-gray-400 w-full text-center text-lg">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">خدمات</th>
            <th className="border border-gray-300 p-2">قیمت (تومان)</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{service.name}</td>
              <td className="border border-gray-300 p-2">{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  