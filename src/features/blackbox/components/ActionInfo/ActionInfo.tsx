import { ActionInfo as ActionInfoType } from '../../types/blackbox.types';

interface ActionInfoProps {
  info: ActionInfoType;
}

export function ActionInfo({ info }: ActionInfoProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
      <p className="text-gray-600 mb-4">{info.description}</p>
      
      <div className="mb-4">
        <h4 className="font-medium mb-2">Required Data:</h4>
        <ul className="list-disc pl-5">
          {info.requiredData.map((data, index) => (
            <li key={index} className="text-sm">
              <span className="font-medium">{data.name}</span> ({data.type}): {data.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-medium mb-2">Return Type:</h4>
        <p className="text-sm">{info.returnType}</p>
      </div>

      <div>
        <h4 className="font-medium mb-2">Database Entities:</h4>
        {info.databaseEntities.map((entity, index) => (
          <div key={index} className="mb-2">
            <h5 className="font-medium">{entity.name}</h5>
            <ul className="list-disc pl-5">
              {entity.fields.map((field, fieldIndex) => (
                <li key={fieldIndex} className="text-sm">
                  <span className="font-medium">{field.name}</span> ({field.type}): {field.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 